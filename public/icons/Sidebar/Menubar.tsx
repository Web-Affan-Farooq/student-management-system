import TypesIcon from '@/@types/Icons'
import React from 'react'

const Menubar = ({ className, size, ...props }: TypesIcon) => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-menu-icon lucide-menu text-pink-text`} {...props}><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
  )
}

export default Menubar