import React from 'react'

export default function Modal({ isOpen, title, onClose, children, footer, data }) {
  if (!isOpen) return null

  // If 'data' is passed, render it automatically in readable format
  const renderData = () => {
    if (!data) return children
    return (
      <div className="space-y-2 max-h-[70vh] overflow-y-auto">
        {Object.entries(data)
          .filter(([key]) => !['_id', 'id', '__v', 'updatedAt'].includes(key)) // exclude unwanted keys
          .map(([key, value]) => (
            <div key={key} className="flex gap-2">
              <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong>
              <span>{key === 'createdAt' ? new Date(value).toLocaleString() : String(value)}</span>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40 transition-opacity" onClick={onClose}></div>
      <div className="bg-white rounded-lg max-w-lg w-full mx-4 z-10 transform transition-all duration-300 scale-100">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>✕</button>
        </div>
        <div className="p-6">
          {renderData()}
        </div>
        {footer && <div className="px-6 py-4 border-t">{footer}</div>}
      </div>
    </div>
  )
}
