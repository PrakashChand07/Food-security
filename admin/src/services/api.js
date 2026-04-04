import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || '/api'

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// attach token from localStorage on each request
api.interceptors.request.use((cfg) => {
  try {
    const token = localStorage.getItem('admin_token')
    if (token) cfg.headers.Authorization = `Bearer ${token}`
  } catch (e) {}
  return cfg
})

export default api
