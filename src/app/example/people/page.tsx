"use client";

import React from "react";
import Image from "next/image";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Sidebar from "../Sidebar";

/* Create dynamic users profile page with this design    https://dribbble.com/shots/17859331-Momentz-Social-Media-App */

/* avatar  badge  tooltip*/
const Card = () => {
    return (
        <div className="flex items-center gap-4 px-[30px] py-3 bg-dark w-full rounded-md shadow-md border border-white/10">

            {/* Profile Image */}
            <div className="flex-shrink-0">
                <div className="rounded-full w-[60px] h-[60px] overflow-hidden border-2 border-white/20">
                    <Image
                        src="/images/person-2.jpg"
                        alt="Muhammad Affan"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Profile Info */}



            <div className="flex flex-col justify-center items-start min-w-0">
                {/* <div className="relative flex flex-row flex-nowrap justify-center items-center gap-[10px]">
                <h4 className="text-white text-md font-bold leading-tight truncate">Mdfu ifuiods ff dsfidsopfi ad Affan</h4>
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                </div> */}
                <div className="relative flex flex-row flex-nowrap justify-center items-center gap-[10px] min-w-0 w-full">
                    <h4 className="text-white text-md font-bold leading-tight truncate w-0 flex-grow">
                        Mdfu ifuiods ff dsfidsopfi ad Affan
                    </h4>
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                </div>

                <p className="text-sm text-pink-text break-words">@muhammad_affan</p>
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
                <div className="border-2 border-solid border-white bg-black p-3 rounded-lg text-gray-400 flex flex-nowrap justify-between items-center relative top-4 ">
                    <h1 className="text-gray-400 font-bold text-[20px]">Events</h1>
                    <div className="flex flex-row flex-nowrap gap-3 ">
                        <i className="fa-solid fa-folder-closed"></i>
                        <i className="fa-solid fa-message"></i>
                        <i className="fa-solid fa-bell"></i>
                        {sidebarVisibility ? <i className="fa-solid fa-bars " onClick={() => {
                            updateSidebarVisibility();
                        }}></i> : <i className="fa-solid fa-xmark hidden" onClick={() => {
                            updateSidebarVisibility();
                        }}></i>}
                    </div>
                </div>

                {/* Options Content */}

                <div className="bg-black h-screen p-6 rounded-lg ">
                    <h1 className="font-bold text-[25px] flex flex-row flex-nowrap justify-start items-center">
                        <Image src="/icons/glass-icons/people.svg" alt="people" width={90} height={90} /><span>People</span>
                    </h1>
                    <div className="border-2 border-solid border-white">
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
/*
integrate hover card component on chats section taggging mechanism 

*/