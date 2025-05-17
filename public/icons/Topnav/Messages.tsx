import TypesIcon from '@/@types/Icons'
import React from 'react'

const Messages = ({className, size,...props}:TypesIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "24"}
      height={size ? String(size.height) : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-message-square-icon lucide-message-square`} {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  )
}

export default Messages