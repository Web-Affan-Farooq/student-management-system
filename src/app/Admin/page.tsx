import React from 'react';
import Sidenav from '@/components/Admin/Sidenav-admin';
import Topnav from '@/components/Admin/Topnav';

const Admin = () => {
  return (
    <div className="p-1 sm:p-3 h-[100vh] bg-dark">
      <div className="flex flex-row flex-wrap justify-between items-start lg:flex-nowrap md:flex-nowrap">
        <Sidenav />
        <Topnav/>
        
        {/* <div>
          <Topnav />
          <div className="flex flex-row flex-wrap">
          </div>
        </div> */}
      </div>
    </div>  )
}

export default Admin;