"use client";
import React, { useContext, useEffect } from "react";
import { NavContext } from "@/context/navcontext";

const Topnav = () => {
  let navState = useContext(NavContext);

  // useEffect(() => {
  //   console.log(navState?.navStatus); // ignore this error
  // },[])
  const handleNav = () => {
    navState?.setnavStatus(!navState?.navStatus); // ignore this error
    // console.log(navState?.navStatus); // ignore this error
  };

  return (
    // <div className="text-white rounded-lg border-2 border-solid border-white w-[65vw] max-[920px]:w-[75vw] p-3 flex flex-row flex-wrap justify-between items-center max-[920px]:absolute max-[920px]:right-5 max-md:w-[90vw] max-sm:flex-wrap max-sm:justify-center">
    //   <h1 className="text-gray-400 font-bold text-[20px]">
    //      Events
    //   </h1>

    //   <div className="flex flex-row flex-wrap gap-3 max-sm:flex-nowrap items-center border-2 border-solid border-white">
    //     <div className="w-auto rounded-2xl bg-dark flex flex-row flex-nowrap">
    //       <input
    //         type="text"
    //         name="search"
    //         id="search"
    //         placeholder="Search here .."
    //         required
    //         className="px-[20px] w-[270px] py-2 rounded-2xl outline-none bg-dark max-sm:w-[200px]"
    //       />
    //       <button type="button" className="p-2 rounded-2xl">
    //         <i className="fa-solid fa-magnifying-glass"></i>
    //       </button>
    //     </div>

    //     <div className="flex flex-row flex-nowrap gap-4 justify-center items-center text-gray-400 text-[20px]">
    //       <i className="fa-solid fa-folder-closed"></i>
    //       <i className="fa-solid fa-message"></i>
    //       <i className="fa-solid fa-bell"></i>
    //       <i className="fa-solid fa-bars-staggered" onClick={handleNav}></i>
    //     </div>

    //   </div>

    // </div>
    <div className="w-[75vw] border-2 border-solid border-white p-3 rounded-lg text-gray-400 flex flex-nowrap justify-between items-center relative top-4 max-[920px]:absolute max-[920px]:right-5 max-[920px]:top-4">
      <h1 className="text-gray-400 font-bold text-[20px]">Events</h1>
      <div className="flex flex-row flex-nowrap gap-3">
        <i className="fa-solid fa-folder-closed"></i>
        <i className="fa-solid fa-message"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-bars-staggered" onClick={handleNav}></i>
      </div>
    </div>
  );
};

export default Topnav;
