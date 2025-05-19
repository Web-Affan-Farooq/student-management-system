"use client";

import React from "react";
import Image from "next/image";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Card from "@/components/Teacher/People/Card";
import Searchbar from "@/components/Teacher/People/Searchbar";
import Sidebar from "@/components/Sidebar/Admin/Sidebar";
import Topnav from "../../Topnav";

import Options from "../../../../../public/icons/Options";

import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import Clock from "../../../../../public/icons/Clock";

/* Create dynamic users profile page with this design    https://dribbble.com/shots/17859331-Momentz-Social-Media-App */

/* avatar  badge  tooltip*/

const Home = () => {
    const { sidebarVisibility, updateSidebarVisibility } = useSidebarVisibility();

    return (
        <div className="flex h-screen bg-dark text-white p-[5px]">
            <Sidebar />
            {/* Main content area */}
            <main className="flex-1 h-[100vh] grid grid-rows-[auto_1fr] gap-[30px] p-2 sm:p-4">
                {/* Top Bar */}
                {/*max-[920px]:absolute max-[920px]:right-5 max-[920px]:top-4 */}
                <Topnav />
                {/* Options Content */}

                <div className="scroll-container overflow-y-scroll bg-black border-2 h-[85vh] p-6 rounded-lg ">
                    <h1 className="font-bold text-[30px] text-pink-text">Physics</h1>
                    <div className="flex pt-[20px] flex-row flex-nowrap justify-start items-center gap-[20px] ">

                        <div className="px-[20px] py-[5px] w-[170px] bg-pink rounded-md">
                            <span className="text-[12px] tracking-[0.25px] leading-[2px]">Total students</span>
                            <h1 className="text-[30px] font-bold">1200</h1>
                        </div>
                        <div className="px-[20px] py-[5px] w-[170px] bg-gray-light rounded-md">
                            <span className="text-[12px] tracking-[0.25px]">Total Teachers</span>
                            <h1 className="text-[30px] font-bold">3</h1>
                        </div>

                    </div>

                    <h1 className="font-bold text-[30px] text-pink-text">Recents</h1>
                    <div className="">

                        <div className="bg-gray-light px-[20px] py-[10px] rounded-md px-">
                            <h2 className="text-[20px] font-semibold">Solenoid and toroid</h2>
                            <div className="flex flex-row flex-nowrap justify-start items-center gap-[6px]">
                                <Clock size={{
                                    width: 17,
                                    height: 17,
                                }} />
                                <span className="text-pink text-[14px]">1:00pm - 2:19pm</span>
                            </div>


                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
};

export default Home;