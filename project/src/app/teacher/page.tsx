import React from 'react';
import Topnav from '@/components/Teacher/Topnav';
import Sidenav from '@/components/Teacher/sidenav';

const Teacher = () => {
  return (
    <div className="p-3 h-[100vh] bg-dark">
      <div className="flex flex-row flex-wrap justify-between items-center">
        <Sidenav />
        <div>
          <Topnav />
          <div className="flex flex-row flex-wrap">
            {/* <Calender /> */}
          </div>
        </div>
      </div>
    </div>  )
}

export default Teacher;