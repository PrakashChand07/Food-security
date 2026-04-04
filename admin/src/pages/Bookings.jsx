import React, { useEffect, useState } from "react";
import Table from "../components/ui/Table";
import { api } from "../services/api";
import Modal from "../components/ui/Modal";
import toast, { Toaster } from "react-hot-toast";

export default function Bookings() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    fetchList(page);
  }, []);

  async function fetchList(p = page) {
    setLoading(true);
    try {
      const res = await api.get("/booking", { params: { page: p, limit: 10 } });
      if (res.data && res.data.success) {
        setItems(res.data.data || []);
        setPage(res.data.pagination?.page || p);
        setPages(res.data.pagination?.pages || 1);
        setTotal(res.data.pagination?.total || 0);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  async function handleDelete() {
    if (!selected) return;
    try {
      const res = await api.delete(`/booking/${selected.id}`);
      if (res.data && res.data.success) {
        // refetch to keep pagination consistent
        fetchList();
        toast.success("Successfully deleted");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete");
    }
    setDeleteOpen(false);
    setSelected(null);
  }

  const columns = [
    {
      key: "sr",
      label: "Sr. No",
      render: (r, idx, page, pageSize) => (page - 1) * pageSize + idx + 1,
    },
    { key: "firstName", label: "First", render: (r) => r.firstName || "" },
    { key: "lastName", label: "Last", render: (r) => r.lastName || "" },
    { key: "email", label: "Email", render: (r) => r.email || "" },
    {
      key: "createdAt",
      label: "Created",
      render: (r) => new Date(r.createdAt).toLocaleString(),
    },
  ];

  const actions = [
    {
      label: "View",
      onClick: (r) => {
        setSelected(r);
        setViewOpen(true);
      },
    },
    {
      label: "Delete",
      variant: "danger",
      onClick: (r) => {
        setSelected(r);
        setDeleteOpen(true);
      },
    },
  ];

  return (
    <div className="space-y-4">
      <Toaster position="top-right" />
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Bookings / Registrations</h2>
      </div>
      <Table
        columns={columns}
        data={items}
        actions={actions}
        serverSide
        page={page}
        pages={pages}
        total={total}
        defaultPageSize={10}
        onPageChange={(p) => {
          setPage(p);
          fetchList(p);
        }}
      />

      {/* View Modal */}
      <Modal
        isOpen={viewOpen}
        onClose={() => setViewOpen(false)}
        title="Booking"
        data={selected}
      />

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        title="Confirm Delete"
      >
        <div className="space-y-4">
          <p>Are you sure you want to delete this entry?</p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setDeleteOpen(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
