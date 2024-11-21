import React from 'react'

const Days = ({text}: {
    text:string;
}) => {
  return (
    <div className="w-auto rounded-lg p-2 text-pinktext font-bold text-center text-[14px]">
        {text}
    </div>
)
}

export default Days;