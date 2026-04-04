import React, { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const AuthContext = createContext()

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const raw = localStorage.getItem('admin_user')
    const token = localStorage.getItem('admin_token')
    if(raw && token){
      setUser(JSON.parse(raw))
    }
    setLoading(false)
  },[])

  async function login(credentials){
    try{
      const res = await api.post('/auth/login', credentials)
      if(res.data && res.data.success){
        const { user, token } = res.data.data
        setUser(user)
        localStorage.setItem('admin_user', JSON.stringify(user))
        localStorage.setItem('admin_token', token)
        return { success: true }
      }
      return { success: false, message: res.data?.message }
    }catch(err){
      return { success: false, message: err.response?.data?.message || err.message }
    }
  }

  function logout(){
    setUser(null)
    localStorage.removeItem('admin_user')
    localStorage.removeItem('admin_token')
  }

  const isSuperadmin = user?.role === 'superadmin'

  return (
    <AuthContext.Provider value={{ user, login, logout, isSuperadmin, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}
