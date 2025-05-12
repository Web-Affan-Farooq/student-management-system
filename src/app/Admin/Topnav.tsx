"use client";
import React from 'react'
import { useSidebarVisibility } from '@/stores/SidebarVisibility';

import Folder from '../../../public/icons/Topnav/Folder';
import Messages from '../../../public/icons/Topnav/Messages';
import Notification from '../../../public/icons/Topnav/Notification';

const Topnav = () => {
    const { sidebarVisibility, updateSidebarVisibility } = useSidebarVisibility();

    return (
        <div className="bg-black p-3 rounded-lg py-[20px] text-gray-400 flex flex-nowrap justify-between items-center relative top-4 ">
            <h1 className="text-gray-400 font-bold text-[20px]">Top nav</h1>
            <div className="flex flex-row flex-nowrap gap-4 ">
                <div className='relative'>
                    <Folder className='text-pink-text' size={{
                        width: 19,
                        height: 19
                    }} />
                    <span className='absolute top-[9px] left-[14px] right-0 bg-pink w-[15px] h-[15px] text-[11px] text-black text-center rounded-full'>{3}</span>
                </div>

                <div className="relative">
                    <Messages className='text-pink-text' size={{
                        width: 19,
                        height: 19
                    }} />
                    <span className='absolute top-[9px] left-[14px] right-0 bg-pink w-[15px] h-[15px] text-[11px] text-black text-center rounded-full'>{3}</span>
                </div>

                <div className='relative'>
                    <Notification className='text-pink-text' size={{
                        width: 19,
                        height: 19
                    }} />
                    <span className='absolute top-[9px] left-[14px] right-0 bg-pink w-[15px] h-[15px] text-[11px] text-black text-center rounded-full'>{3}</span>
                </div>

                {sidebarVisibility ? <i className="fa-solid fa-xmark hidden" onClick={() => {
                    updateSidebarVisibility();
                }}></i> : <i className="fa-solid fa-bars " onClick={() => {
                    updateSidebarVisibility();
                }}></i>}
            </div>
        </div>
    )
}

export default Topnav