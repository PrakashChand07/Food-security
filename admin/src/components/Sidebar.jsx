

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Bars3Icon,
  HomeIcon,
  UserPlusIcon,
  MegaphoneIcon,
  UsersIcon,
  BuildingLibraryIcon,
  ArchiveBoxIcon,
  CalendarDaysIcon,
  TicketIcon,
} from '@heroicons/react/24/outline'
import { useAuth } from '../context/AuthContext'

export default function Sidebar({ collapsed, onToggle }) {
  const loc = useLocation()
  const { isSuperadmin } = useAuth()

  const items = [
    { to: '/', label: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
    { to: '/booking', label: 'Registration', icon: <CalendarDaysIcon className="w-5 h-5" /> },
    { to: '/subscribe', label: 'Subscribe', icon: <UserPlusIcon className="w-5 h-5" /> },
    { to: '/speak', label: 'Speak', icon: <MegaphoneIcon className="w-5 h-5" /> },
    { to: '/nominate', label: 'Nominate', icon: <UsersIcon className="w-5 h-5" /> },
    { to: '/partner', label: 'Partner', icon: <UsersIcon className="w-5 h-5" /> },
    { to: '/exhibit-sponsor', label: 'Exhibit/Sponsor', icon: <BuildingLibraryIcon className="w-5 h-5" /> },
    { to: '/past-edition', label: 'Past Edition', icon: <ArchiveBoxIcon className="w-5 h-5" /> },
    { to: '/visit', label: 'Visit', icon: <TicketIcon className="w-5 h-5" /> },
  ]

  if (isSuperadmin)
    items.push({
      to: '/users',
      label: 'Users',
      icon: <UsersIcon className="w-5 h-5" />,
    })

  return (
    <div className={`bg-white h-full border-r ${collapsed ? 'w-16' : 'w-64'} transition-width duration-200`}>
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && <div className="font-bold">Admin</div>}
        <button onClick={onToggle} className="p-1 text-gray-600 hover:text-gray-800">
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>

      <nav className="p-2">
        {items.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 ${
              loc.pathname === i.to ? 'bg-gray-100' : ''
            }`}
          >
            <div className="text-gray-600">{i.icon}</div>
            {!collapsed && <div>{i.label}</div>}
          </Link>
        ))}
      </nav>
    </div>
  )
}
