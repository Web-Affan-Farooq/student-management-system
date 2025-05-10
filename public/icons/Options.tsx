import React from 'react';
import TypesIcon from '@/@types/Icons';

const Options = ({ className, size }: TypesIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size ? String(size.width) : "24"} height={size ? String(size.height) : "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical`}><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
  )
}

export default Options