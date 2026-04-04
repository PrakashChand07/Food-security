import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Login from './pages/Login'
import Subscribe from './pages/Subscribe'
import Contact from './pages/Contact'
import Speak from './pages/Speak'
import Nominate from './pages/Nominate'
import Partner from './pages/Partner'
import ExhibitSponsor from './pages/ExhibitSponsor'
import PastEditionRequests from './pages/PastEditionRequests'
import Bookings from './pages/Bookings'
import { AuthProvider, useAuth } from './context/AuthContext'
import Visit from './pages/Visit'

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
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="speak" element={<Speak />} />
          <Route path="nominate" element={<Nominate />} />
          <Route path="partner" element={<Partner />} />
          <Route path="exhibit-sponsor" element={<ExhibitSponsor />} />
          <Route path="past-edition" element={<PastEditionRequests />} />
          <Route path="booking" element={<Bookings />} />
          <Route path="users" element={<Users />} />
          <Route path="visit" element={<Visit />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
