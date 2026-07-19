import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Login from './pages/Login'
import Bookings from './pages/Bookings'
import { AuthProvider, useAuth } from './context/AuthContext'

function PrivateRoute({ children }){
  const { user, loading } = useAuth()
  if(loading) return null
  return user ? children : <Navigate to="/login" />
}

export default function App(){
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="booking" element={<Bookings />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
