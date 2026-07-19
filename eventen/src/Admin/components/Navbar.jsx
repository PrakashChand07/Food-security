import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onToggleSidebar }) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between bg-white p-3 border-b">
      <div className="flex items-center gap-2">
        <button className="md:hidden p-1" onClick={onToggleSidebar}>
          ☰
        </button>
        <div className="text-lg font-semibold">FOOD SECURITY SUMMITX</div>
      </div>

      <div className="flex items-center gap-4 relative">
        {user && (
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-base font-medium text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-md border border-gray-300"
              onClick={() => setOpen(!open)}
            >
              <span>{user.name}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-36 bg-white border rounded-md shadow-lg z-50">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
