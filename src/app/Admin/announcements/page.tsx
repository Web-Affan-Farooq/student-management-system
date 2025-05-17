"use client";

import "../style.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Sidebar from "../../../components/Sidebar/Admin/Sidebar";
import Topnav from "../Topnav";
import Plus from "../../../../public/icons/Plus";
import Clock from "../../../../public/icons/Clock";
import Options from "../../../../public/icons/Options";
import Calender from "../../../../public/icons/Calender";

/* Create dynamic users profile page with this design    https://dribbble.com/shots/17859331-Momentz-Social-Media-App */

/* avatar  badge  tooltip*/

const Card = () => {
    return (
        <div className="rounded-md p-[20px] relative flex flex-col flex-nowrap gap-[10px] tracking-[0.25px]">
            <h2 className="w-[97%] font-bold text-pink-text">Announcement of grand test</h2>
            <p className="tracking-[0.50px] text-[15px] text-gray-200">Revise all the topic from chapter "current electricity"</p>
            <div className="flex flex-row flex-wrap justify-start items-center gap-[10px]">
                <div className="text-center text-gray-400 flex flex-row flex-nowrap justify-center items-center gap-[4px]">
                    <Calender className="text-pink" size={{width:17,height:17}}/>
                    <p className="text-[15px]">12 may 2024</p>
                </div>
            </div>

            {/* <Options className="absolute text-pink top-[40px] right-3" size={{width:20, height:20}}/> */}
        </div>
    )
}

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

                <div className="scroll-container bg-black border-2 h-[85vh] sm:p-6 rounded-lg max-sm:p-3 overflow-y-scroll">
                    <div className="flex flex-row flex-wrap justify-between items-center">

                        <div className="font-bold flex flex-row flex-nowrap justify-start items-center">
                            <Image src="/icons/glass-icons/people.svg" alt="people" width={90} height={90} className="translate-y-[3px] max-md:w-[70px] max-sm:h-[70px]"/><span className="max-sm:text-[22px] sm:text-[22px] md:text-[25px]">Announcements</span>
                        </div>

                        <Link href={"/Admin//announcements/create"}>
                            <button type="button" className="bg-sharp px-[15px] py-[8px] rounded-md font-bold shadow-sharp-medium flex flex-row flex-nowrap justify-center items-center gap-1"><Plus />Create</button>
                        </Link>
                    </div>
                    
                    <br /><br />
                    <div className="scroll-container flex flex-col gap-[15px] h-[70vh]">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Home;