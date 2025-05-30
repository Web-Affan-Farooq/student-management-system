import React from 'react';
import TypesIcon from '@/@types/Icons';

const Announcements = ({className, size, ...props}:TypesIcon) => {
  return (
<svg width={size ? String(size.width) : "24"} height={size ? String(size.height) : "24"}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
<path d="M2 9.99979V13.9998C2 15.9998 3 16.9998 5 16.9998H6.43C6.8 16.9998 7.17 17.1098 7.49 17.2998L10.41 19.1298C12.93 20.7098 15 19.5598 15 16.5898V7.40979C15 4.42979 12.93 3.28979 10.41 4.86979L7.49 6.69979C7.17 6.88979 6.8 6.99979 6.43 6.99979H5C3 6.99979 2 7.99979 2 9.99979Z" fill="currentColor"/>
<path d="M18 8C19.78 10.37 19.78 13.63 18 16V8Z" fill="currentColor"/>
<path d="M19.83 5.5C22.72 9.35 22.72 14.65 19.83 18.5V5.5Z" fill="currentColor"/>
</svg>
  )
}

export default Announcements