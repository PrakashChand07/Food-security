import React, { useEffect, useState } from 'react';
import Table from '../components/ui/Table';
import { api } from '../services/api';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const { isSuperadmin } = useAuth();

  // form state for create/edit
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'admin' });

  useEffect(() => {
    fetchUsers(page);
  }, []);

  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await api.get('/users', { params: { page, limit: 10 } });
      if (res.data && res.data.success) {
        setUsers(res.data.data || []);
        setPage(res.data.pagination?.page || page);
        setPages(res.data.pagination?.pages || 1);
        setTotal(res.data.pagination?.total || 0);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!selected) return;
    try {
      const res = await api.delete(`/users/${selected.id}`);
      if (res.data && res.data.success) {
        fetchUsers();
        toast.success('User deleted successfully');
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Delete failed');
    }
    setDeleteOpen(false);
    setSelected(null);
  }

  const columns = [
    { key: "sr", label: "Sr. No", render: (r, idx, page, pageSize) => (page - 1) * pageSize + idx + 1 },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true }
  ];

  const actions = isSuperadmin
    ? [
        { label: 'Edit', variant: 'secondary', onClick: (r) => { setSelected(r); setForm({ name: r.name, email: r.email, password: '', role: r.role || 'admin' }); setOpen(true); } },
        { label: 'Delete', variant: 'danger', onClick: (r) => { setSelected(r); setDeleteOpen(true); } }
      ]
    : null;

  return (
    <div className="space-y-4">
      <Toaster position="top-right" />
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Users</h2>
        {isSuperadmin && (
          <Button onClick={() => { setSelected(null); setForm({ name:'', email:'', password:'', role:'admin' }); setOpen(true); }}>
            Create User
          </Button>
        )}
      </div>

      <Table
        columns={columns}
        data={users}
        actions={actions}
        serverSide
        page={page}
        pages={pages}
        total={total}
        defaultPageSize={10}
        onPageChange={(p) => {
          setPage(p);
          fetchUsers(p);
        }}
      />

      {/* Create/Edit Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)} title={selected ? 'Edit User' : 'Create User'}>
        <form className="space-y-3" onSubmit={async (e) => {
          e.preventDefault();
          try {
            if (selected) {
              // edit
              const payload = { name: form.name, email: form.email };
              if (form.password) payload.password = form.password;
              const res = await api.patch(`/users/${selected.id}`, payload);
              if (res.data && res.data.success) {
                setUsers(u => u.map(x => x.id === selected.id ? res.data.data : x));
                setOpen(false);
                toast.success('User updated successfully');
              }
            } else {
              // create
              const res = await api.post('/users/create', form);
              if (res.data && res.data.success) {
                setUsers(u => [res.data.data, ...u]);
                setOpen(false);
                toast.success('User created successfully');
              }
            }
          } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || 'Save failed');
          }
        }}>
          <div>
            <label className="block text-sm">Name</label>
            <input className="w-full border rounded px-2 py-1" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input className="w-full border rounded px-2 py-1" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm">Password {selected ? '(leave blank to keep)' : ''}</label>
            <input className="w-full border rounded px-2 py-1" type="password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm">Role</label>
            <select value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))} className="w-full border rounded px-2 py-1">
              <option value="admin">admin</option>
              <option value="superadmin">superadmin</option>
            </select>
          </div>
          <div className="flex justify-end">
            <Button type="button" onClick={() => setOpen(false)}>Close</Button>
            <Button type="submit" className="ml-2" variant="primary">Save</Button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={deleteOpen} onClose={() => setDeleteOpen(false)} title="Confirm Delete">
        <div className="space-y-4">
          <p>Are you sure you want to delete this user?</p>
          <div className="flex justify-end gap-2">
            <button onClick={() => setDeleteOpen(false)} className="px-4 py-2 border rounded">Cancel</button>
            <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded">Delete</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
