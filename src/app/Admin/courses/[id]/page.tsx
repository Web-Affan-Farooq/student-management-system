"use client";

import "../../style.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Sidebar from "../../../../components/Sidebar/Admin/Sidebar";
import Topnav from "../../Topnav";
import Plus from "../../../../../public/icons/Plus";
import Clock from "../../../../../public/icons/Clock";
import Options from "../../../../../public/icons/Options";
import Calender from "../../../../../public/icons/Calender";

/* Create dynamic users profile page with this design    https://dribbble.com/shots/17859331-Momentz-Social-Media-App */

/* avatar  badge  tooltip*/

const Card= () => {
    return (
        <div className="bg-medium rounded-2xl p-4 cursor-pointer sm:max-w-sm max-sm:w-[90vw] tracking-[0.25px]">
            <h2 className="text-pink font-semibold text-xl mb-2">Physics</h2>
            <p className="text-[15px] text-gray-600 text-sm mb-4">
                Dive into the fundamentals of motion, energy, and matter in this engaging Physics course.
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex flex-row flex-nowrap justify-center items-center gap-[6px] "><Clock size={
                    {
                        width:18,
                        height:18,
                    }
                }/> 12 Weeks</div>
                <span>👨‍🏫 John Doe</span>
            </div>
        </div>
    );
};



const Home = () => {
    const { sidebarVisibility, updateSidebarVisibility } = useSidebarVisibility();

    return (
        <div className="flex h-screen bg-dark text-white p-[5px]">
            <Sidebar />
            {/* Main content area */}
            <main className="flex-1 h-[100vh] grid grid-rows-[auto_1fr] gap-4 p-2 sm:p-4">
                {/* Top Bar */}
                {/*max-[920px]:absolute max-[920px]:right-5 max-[920px]:top-4 */}
                <Topnav />
                {/* Options Content */}

                <div className="scroll-container bg-black h-screen sm:p-6 rounded-lg max-sm:p-3 overflow-y-scroll">
                    <div className="flex flex-row flex-wrap justify-between items-center">
                        <div className="font-bold flex flex-row flex-nowrap justify-start items-center">
                            <Image src="/icons/glass-icons/people.svg" alt="people" width={90} height={90} className="translate-y-[3px] max-md:w-[70px] max-sm:h-[70px]"/><span className="max-sm:text-[22px] sm:text-[22px] md:text-[25px]">Course Name </span>
                        </div>
                        <div></div>

                    </div>
                    
                    <br /><br />
                    <div className="scroll-container grid sm:grid-cols-2 gap-[15px]">

                    </div>

                </div>
            </main>
        </div>
    );
};

export default Home;