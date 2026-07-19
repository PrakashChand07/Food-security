import React from 'react'

export default function Input({ label, id, error, className='', ...props }){
  return (
    <div className={className}>
      {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input id={id} className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-primary-500" {...props} />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  )
}
