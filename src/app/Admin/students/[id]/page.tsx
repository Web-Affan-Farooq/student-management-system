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

                    <div className="flex flex-row flex-wrap justify-between items-center">

                        <div className="font-bold flex flex-row flex-nowrap justify-start items-center">
                            <Image src="/icons/glass-icons/people.svg" alt="people" width={90} height={90} className="translate-y-[3px] max-md:w-[70px] max-sm:h-[70px]" /><span className="max-sm:text-[22px] sm:text-[22px] md:text-[25px]">Students</span>
                        </div>

                    </div>

                    {/* <div className="flex flex-row flex-wrap justify-between items-center">
                        <div className="text-[25px] font-bold flex flex-row flex-nowrap justify-start items-center">
                            <Image src="/icons/glass-icons/people.svg" alt="people" width={90} height={90} /><span>People</span>
                        </div>
                        <Searchbar />
                    </div> */}
                    <div className="flex flex-row flex-nowrap justify-between items-center">
                        <div className="rounded-full w-[100px] h-[100px] overflow-hidden">
                            <Image
                                src="/images/person-2.jpg"
                                alt="Muhammad Affan"
                                width={90}
                                height={90}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <ContextMenu>
                            <ContextMenuTrigger><Options className="text-pink" size={{ width: 20, height: 20 }} /></ContextMenuTrigger>
                            <ContextMenuContent className="bg-medium border-none">
                                <ContextMenuItem className="bg-pink text-white">Remove</ContextMenuItem>
                            </ContextMenuContent>
                        </ContextMenu>

                    </div>

                    <h1 className="text-[30px] text-pink-text font-bold px-[10px]">user name</h1>
                    <div className="flex flex-row flex-wrap justify-start items-center gap-[7px] py-[10px]">

                        <div className="bg-medium sm:px-3 sm:py-1 sm:rounded-[20px] flex flex-row flex-nowrap justify-center items-center sm:gap-2 max-sm:px-[11px] max-sm:py-[3px] max-sm:rounded-[10px] max-sm:gap-1">
                            <span className="text-[15px] max-sm:text-[13px] tracking-[0.25px] text-pink-text/70">Web development</span>
                        </div>
                        <div className="bg-medium text-white-custom sm:px-3 sm:py-1 sm:rounded-[20px] flex flex-row flex-nowrap justify-center items-center sm:gap-2 max-sm:px-[11px] max-sm:py-[3px] max-sm:rounded-[10px] max-sm:gap-1">
                            <span className="text-[15px] max-sm:text-[13px] tracking-[0.25px] text-pink-text/70">Web development</span>
                        </div>
                        <div className="bg-medium text-white-custom sm:px-3 sm:py-1 sm:rounded-[20px] flex flex-row flex-nowrap justify-center items-center sm:gap-2 max-sm:px-[11px] max-sm:py-[3px] max-sm:rounded-[10px] max-sm:gap-1">
                            <span className="text-[15px] max-sm:text-[13px] tracking-[0.25px] text-pink-text/70">Web development</span>
                        </div>

                    </div>

                    <h1 className="text-[30px] font-bold">
                        Statistics
                    </h1>
                </div>
            </main>
        </div>
    );
};

export default Home;