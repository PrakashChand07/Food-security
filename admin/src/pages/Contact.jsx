import React, { useEffect, useState } from "react";
import Table from "../components/ui/Table";
import { api } from "../services/api";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";

export default function Contact() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchList(page);
  }, []);

  async function fetchList(p = page) {
    setLoading(true);
    try {
      const res = await api.get("/contact", { params: { page: p, limit: 10 } });
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

  async function handleDelete(r) {
    if (!confirm("Delete entry?")) return;
    try {
      const res = await api.delete(`/contact/${r.id}`);
      if (res.data && res.data.success) fetchList();
    } catch (err) {
      console.error(err);
    }
  }

  const columns = [
        { key: "sr", label: "Sr. No", render: (r, idx, page, pageSize) => (page - 1) * pageSize + idx + 1 },
    {
      key: "name",
      label: "Name",
      render: (r) =>
        r.name || (r.firstName ? `${r.firstName} ${r.lastName}` : ""),
    },
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
        setOpen(true);
      },
    },
    { label: "Delete", variant: "danger", onClick: (r) => handleDelete(r) },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Contact / Connect</h2>
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

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Contact Entry">
        {selected && (
          <div className="space-y-2 max-h-[70vh] overflow-y-auto">
            {Object.entries(selected)
              .filter(
                ([key]) => !["_id", "id", "__v", "updatedAt"].includes(key)
              ) // exclude unwanted keys
              .map(([key, value]) => (
                <div key={key} className="flex gap-2">
                  <strong className="capitalize">
                    {key.replace(/([A-Z])/g, " $1")}:
                  </strong>
                  <span>
                    {key === "createdAt"
                      ? new Date(value).toLocaleString()
                      : String(value)}
                  </span>
                </div>
              ))}
          </div>
        )}
      </Modal>
    </div>
  );
}
