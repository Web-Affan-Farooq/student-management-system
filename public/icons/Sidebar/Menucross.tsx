import TypesIcon from '@/@types/Icons'
import React from 'react'

const Menucross = ({className, size,...props}:TypesIcon) => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "24"} height={size ? String(size.height) : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-x-icon lucide-x text-pink-text`} {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  )
}

export default Menucross