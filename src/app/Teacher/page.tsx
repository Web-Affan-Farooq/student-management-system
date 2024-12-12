import React from 'react';
// import Topnav from '@/components/Topnav/Topnav';
// import Sidenav from '@/components/Sidenav/Sidenav-teacher';

import Topnav from '@/components/Teacher/Topnav';
import Sidenav from '@/components/Teacher/Sidenav-teacher';


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

export default Teacher