import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'

export default function Login(){
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const { login } = useAuth()
  const nav = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    // call backend
    login({ email, password: pass }).then(res=>{
      if(res.success) nav('/')
      else alert(res.message || 'Login failed')
    }).catch(err=>{
      console.error(err); alert('Login failed')
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <Card>
          <h3 className="text-xl font-semibold mb-4">Sign in to Admin</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <Input label="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
            <Button type="submit" full>Sign in</Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
