"use client";

import React, { useContext, useState } from 'react';
import Sidenav from '@/components/Admin/Sidenav-admin';
import Topnav from '@/components/Admin/Topnav';
import { OptionContext } from '@/context/option-context';


// importing components that needes to be attached to main pages
import Dashboard from '@/components/Admin/Dashboard/Dashboard';
import Chats from '@/components/Admin/Chats/Chats';
import Profiles from '@/components/Admin/Profiles/Profiles';
import Preveledges from '@/components/Admin/Preveledges/preveledges';
import Events from '@/components/Admin/Events/Events';
import Finances from '@/components/Admin/Finances/Finances';
import Settings from '@/components/Admin/Settings/Settings';

const Admin = () => {
const option = useContext(OptionContext);

const [component, setComponent] = useState<React.ReactElement>();  // state for storing component

if(option?.option === "Dashboard") {
  console.log(option?.option);  // ignore this error
  setComponent(<Dashboard/>)
}
else if(option?.option === "Chats") {
  console.log(option?.option); // ignore this error
  setComponent(<Chats/>)
}
else if(option?.option === "Events") {
  console.log(option?.option); // ignore this error
setComponent(<Events/>)
}
else if(option?.option === "Profiles") {
  console.log(option?.option); // ignore this error
  setComponent(<Profiles/>)

}
else if(option?.option === "Finances") {
  console.log(option?.option); // ignore this error
  setComponent(<Finances/>)

}
else if(option?.option === "Settings") {
  console.log(option?.option); // ignore this error
  setComponent(<Settings/>)
}
else if(option?.option === "Preveledges") {
  console.log(option?.option); // ignore this error
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