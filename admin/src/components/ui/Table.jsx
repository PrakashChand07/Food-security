import React, { useMemo, useState } from "react";
import Button from "./Button";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

export default function Table({ columns, data, actions, serverSide = false, page: pageProp = 1, pages: pagesProp = 1, total: totalProp = 0, onPageChange, defaultPageSize = 10 }) {
  const pageSize = defaultPageSize; // entries per page
  const [page, setPage] = useState(pageProp);
  const [sort, setSort] = useState({ key: null, dir: null });

  const sorted = useMemo(() => {
    if (!sort.key) return data;
    const sortedData = [...data].sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === "number" && typeof bv === "number") return av - bv;
      return String(av).localeCompare(String(bv));
    });
    return sort.dir === "asc" ? sortedData : sortedData.reverse();
  }, [data, sort, columns]);

  const total = serverSide ? totalProp : sorted.length;
  const pages = serverSide ? Math.max(1, Number(pagesProp || 1)) : Math.max(1, Math.ceil(total / pageSize));
  const visible = serverSide ? sorted : sorted.slice((page - 1) * pageSize, page * pageSize);

  function changeSort(key) {
    if (sort.key !== key) setSort({ key, dir: "asc" });
    else if (sort.dir === "asc") setSort({ key, dir: "desc" });
    else setSort({ key: null, dir: null });
  }

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) pageNumbers.push(i);

  // Keep page state in sync when used server-side
  React.useEffect(() => {
    if (serverSide) setPage(Number(pageProp) || 1);
  }, [pageProp, serverSide]);

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center gap-2">
                  <span>{col.label}</span>
                  {col.sortable && (
                    <button
                      onClick={() => changeSort(col.key)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <ChevronUpDownIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </th>
            ))}
            {actions && (
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
  {visible.map((row, idx) => (
    <tr key={row.id || idx} className="hover:bg-gray-50">
      {columns.map((col) => (
        <td key={col.key} className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
          {col.render ? col.render(row, idx, page, pageSize) : row[col.key]}
        </td>
      ))}
      {actions && (
        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 text-right">
          {actions.map((act, i) => (
            <Button
              key={i}
              variant={act.variant || "primary"}
              size="sm"
              className="ml-2"
              onClick={() => act.onClick(row)}
            >
              {act.label}
            </Button>
          ))}
        </td>
      )}
    </tr>
  ))}
</tbody>

      </table>

      {/* Centered numbered pagination */}
        <div className="flex justify-center items-center gap-2 py-4">
        <button
          disabled={page <= 1}
          onClick={() => {
            const next = Math.max(1, page - 1);
            if (serverSide) onPageChange && onPageChange(next);
            setPage(next);
          }}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        {pageNumbers.map((num, idx) => {
          if (
            num === 1 ||
            num === pages ||
            (num >= page - 1 && num <= page + 1)
          ) {
            return (
              <button
                key={idx}
                onClick={() => {
                  if (serverSide) onPageChange && onPageChange(num);
                  setPage(num);
                }}
                className={`px-3 py-1 border rounded ${
                  num === page
                    ? "bg-blue-500 text-white border-blue-500"
                    : "text-gray-700"
                }`}
              >
                {num}
              </button>
            );
          } else if (
            (num === page - 2 && num > 1) ||
            (num === page + 2 && num < pages)
          ) {
            return <span key={idx}>...</span>;
          }
          return null;
        })}

        <button
          disabled={page >= pages}
          onClick={() => {
            const next = Math.min(page + 1, pages);
            if (serverSide) onPageChange && onPageChange(next);
            setPage(next);
          }}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
