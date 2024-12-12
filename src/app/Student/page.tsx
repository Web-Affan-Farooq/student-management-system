import React from 'react';
import Sidenav from '@/components/Student/Sidenav-student';
import Topnav from '@/components/Student/Topnav';

const Student = () => {
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

export default Student
