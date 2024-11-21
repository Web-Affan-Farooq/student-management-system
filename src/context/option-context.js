"use client";

import React, { useState, createContext } from "react";

export let OptionContext = createContext(null);

const OptionContextProvider = ({children}) => {
    const [option, setoption] = useState("Dashboard");

    return (
        <OptionContext.Provider value={{option, setoption}}>
            {children}
        </OptionContext.Provider>
    )
}
export default OptionContextProvider;