"use client";

import React, { useContext, useState } from 'react';
import Sidenav from '@/components/Admin/Sidenav-admin';
import Topnav from '@/components/Admin/Topnav';
// import { OptionContext } from '@/context/option-context';
import { OptionContext } from '@/context/OptionContext';


// importing components that needes to be attached to main pages
import Dashboard from '@/components/Admin/Dashboard/Dashboard';
import Chats from '@/components/Admin/Chats/Chats';
import Profiles from '@/components/Admin/Profiles/Profiles';
import Preveledges from '@/components/Admin/Preveledges/preveledges';
import Events from '@/components/Admin/Events/Events';
import Finances from '@/components/Admin/Finances/Finances';
import Settings from '@/components/Admin/Settings/Settings';

const Admin = () => {
const [option, setOption] = useContext(OptionContext);

const [component, setComponent] = useState<React.ReactElement>();  // state for storing component

if(option === "Dashboard") {
  console.log(option); 
  setComponent(<Dashboard/>)
}
else if(option === "Chats") {
  console.log(option); 
  setComponent(<Chats/>)
}
else if(option === "Events") {
  console.log(option); 
setComponent(<Events/>)
}
else if(option === "Profiles") {
  console.log(option); 
  setComponent(<Profiles/>)

}
else if(option === "Finances") {
  console.log(option); 
  setComponent(<Finances/>)

}
else if(option === "Settings") {
  console.log(option); 
  setComponent(<Settings/>)
}
else if(option === "Preveledges") {
  console.log(option); 
setComponent(<Preveledges/>)

}else {
  console.log("hello");
}

  return (
    <div className="p-1 sm:p-3 h-[100vh] bg-dark">
      <div className="flex flex-row flex-wrap justify-between items-start lg:flex-nowrap md:flex-nowrap">
        <Sidenav />
        <Topnav/>
        {component}
      </div>
    </div>  )
}

export default Admin;