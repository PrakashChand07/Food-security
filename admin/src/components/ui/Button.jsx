import React from 'react'
import classNames from 'classnames'

export default function Button({ children, variant='primary', size='md', full=false, icon, onClick, type='button', className='', ...props }){
  const base = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition'
  const sizes = {
    sm: 'px-2.5 py-1.5 text-sm',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2 text-base'
  }
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100'
  }

  const classes = classNames(base, sizes[size], variants[variant] || variant, {
    'w-full': full
  }, className)

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  )
}
