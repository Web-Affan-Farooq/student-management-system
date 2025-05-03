"use client";
import React, { useContext, useEffect, useState } from "react";
import { NavContext } from "@/context/Navcontext";

const Topnav = () => {
  const [navState, setNavState] = useContext(NavContext);
  const [windowSize, setwindowSize] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      setwindowSize(window.innerWidth)
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, []);

  return (
    <div className="w-[75vw] border-2 border-solid border-white p-3 rounded-lg text-gray-400 flex flex-nowrap justify-between items-center relative top-4 max-[920px]:absolute max-[920px]:right-5 max-[920px]:top-4">
      <h1 className="text-gray-400 font-bold text-[20px]">Events</h1>
      <div className="flex flex-row flex-nowrap gap-3 ">
        <i className="fa-solid fa-folder-closed"></i>
        <i className="fa-solid fa-message"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-bars-staggered" onClick={() => {
            if(windowSize <= 768) {
              setNavState(!navState)
            } 
        }}></i>
      </div>
    </div>
  );
};

export default Topnav;
