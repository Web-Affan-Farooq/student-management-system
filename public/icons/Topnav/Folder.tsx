import TypesIcon from '@/@types/Icons';
import React from 'react';

const Folder = ({ className, size, ...props }: TypesIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? String(size.width) : "24"}
      height={size ? String(size.height) : "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-folder-closed-icon ${className}`}
      {...props}
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M2 10h20" />
    </svg>
  );
};

export default Folder;
