"use client";

import React, { createContext, useState } from "react";

export const OptionContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["", () => {}]);

const OptionContextProvider = ({children}:{children:React.ReactNode}) => {
    const [option, setOption] = useState<string>("");
    return (
        <OptionContext.Provider value={[option, setOption]}>
            {children}
        </OptionContext.Provider>
    )
}
export default OptionContextProvider;