"use client";
import React from 'react'
import { useSidebarVisibility } from '@/stores/SidebarVisibility';

const Topnav = () => {
    const {sidebarVisibility , updateSidebarVisibility} = useSidebarVisibility(); 

    return (
               <div className="border-2 border-solid border-white bg-black p-3 rounded-lg text-gray-400 flex flex-nowrap justify-between items-center relative top-4 ">
                    <h1 className="text-gray-400 font-bold text-[20px]">Top nav</h1>
                    <div className="flex flex-row flex-nowrap gap-3 ">
                        <i className="fa-solid fa-folder-closed"></i>
                        <i className="fa-solid fa-message"></i>
                        <i className="fa-solid fa-bell"></i>
                        {sidebarVisibility ? <i className="fa-solid fa-xmark hidden" onClick={() => {
                            updateSidebarVisibility();
                        }}></i>:<i className="fa-solid fa-bars " onClick={() => {
                            updateSidebarVisibility();
                        }}></i> }
                    </div>
                </div>
  )
}

export default Topnav