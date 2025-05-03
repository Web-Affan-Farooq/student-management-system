"use client";

import React from "react";
import Image from "next/image";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Sidebar from "../Sidebar";
import Card from "@/components/Teacher/People/Card";
import Searchbar from "@/components/Teacher/People/Searchbar";

/* Create dynamic users profile page with this design    https://dribbble.com/shots/17859331-Momentz-Social-Media-App */

/* avatar  badge  tooltip*/

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
                    <div className="flex flex-row flex-wrap justify-between items-center">
                        <div className="text-[25px] font-bold flex flex-row flex-nowrap justify-start items-center">
                        <Image src="/icons/glass-icons/people.svg" alt="people" width={90} height={90} /><span>People</span>
                        </div>
                        <Searchbar/>
                    </div>
                    <br /><br />
                    <div className="flex flex-col gap-[8px]">
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