import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthContext'

export default function AdminLayout(){
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { user } = useAuth()

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className={`hidden md:block`}> 
        <Sidebar collapsed={collapsed} onToggle={()=>setCollapsed(c=>!c)} />
      </aside>

      <div className="flex-1 flex flex-col">
        <Navbar onToggleSidebar={()=>setMobileOpen(o=>!o)} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/30" onClick={()=>setMobileOpen(false)}></div>
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-white">
            <Sidebar collapsed={false} onToggle={()=>{ setMobileOpen(false) }} />
          </div>
        </div>
      )}
    </div>
  )
}
