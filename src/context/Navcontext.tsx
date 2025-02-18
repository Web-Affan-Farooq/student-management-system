"use client";

import React ,{createContext, useState} from "react";

export const NavContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}]);

const NavContextProvider = ({children}:{children:React.ReactNode}) => {
    const [navStatus, setNavStatus] = useState<boolean>(false);

    return (
        <NavContext.Provider value={[navStatus, setNavStatus]}>
            {children}
        </NavContext.Provider>
    )
}
export default NavContextProvider;