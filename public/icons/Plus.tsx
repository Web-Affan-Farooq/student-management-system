import TypesIcon from '@/@types/Icons'
import React from 'react'

const Plus = ({className, size, ...props}:TypesIcon) => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "24"} height={size ? String(size.height) : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-plus-icon lucide-plus ${className}`} {...props}><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  )
}

export default Plus