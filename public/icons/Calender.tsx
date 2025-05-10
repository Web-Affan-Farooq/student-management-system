import TypesIcon from '@/@types/Icons'
import React from 'react'

const Calender = ({className, size}:TypesIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "24"} height={size ? String(size.height) : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-calendar-icon lucide-calendar`}><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
  )
}

export default Calender