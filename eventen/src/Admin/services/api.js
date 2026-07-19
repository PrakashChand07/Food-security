import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL ? `${process.env.REACT_APP_API_URL}/api` : '/api'

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
