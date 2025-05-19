import React from 'react'
import TypesIcon from '@/@types/Icons'

const Clock = ({className, size,...props}:TypesIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "24"} height={size ? String(size.height) : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-clock-icon lucide-clock`} {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  )
}

export default Clock