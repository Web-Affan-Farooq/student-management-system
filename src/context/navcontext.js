"use client";
import React, {createContext, useState} from 'react';

export const NavContext= createContext(null);

const NavContextProvider = ({children}) => {
    const [navStatus, setnavStatus] = useState(true);

  return (
    <NavContext.Provider value={{navStatus, setnavStatus}}>
        {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider;