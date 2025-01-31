"use client";

import React ,{createContext, useState} from "react";

export const Navcontext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}]);

const NavContextProvider = ({children}:{children:React.ReactNode}) => {
    const [navStatus, setNavStatus] = useState<boolean>(false);

    return (
        <Navcontext.Provider value={[navStatus, setNavStatus]}>
            {children}
        </Navcontext.Provider>
    )
}
export default NavContextProvider;