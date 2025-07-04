"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Sidebar from "../../../components/Sidebar/Admin/Sidebar";
import Card from "@/components/Teacher/People/Card";
import Searchbar from "@/components/Teacher/People/Searchbar";
import Topnav from "../Topnav";

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
                        <Searchbar />

                    </div>

                    {/* <div className="flex flex-row flex-wrap justify-between items-center">
                        <div className="text-[25px] font-bold flex flex-row flex-nowrap justify-start items-center">
                            <Image src="/icons/glass-icons/people.svg" alt="people" width={90} height={90} /><span>People</span>
                        </div>
                        <Searchbar />
                    </div> */}
                    <br /><br />
                    <div className="flex flex-col gap-[8px] h-[70vh]">
                        <Link href={"/Admin/students/1"}>
                            <Card />
                        </Link>
                        <Link href={"/Admin/students/1"}>
                            <Card />
                        </Link>
                        <Link href={"/Admin/students/1"}>
                            <Card />
                        </Link>
                        <Link href={"/Admin/students/1"}>
                            <Card />
                        </Link>
                        <Link href={"/Admin/students/1"}>
                            <Card />
                        </Link>
                        <Link href={"/Admin/students/1"}>
                            <Card />
                        </Link>
                        <Link href={"/Admin/students/1"}>
                            <Card />
                        </Link>
                        <Link href={"/Admin/students/1"}>
                            <Card />
                        </Link>
                        <Link href={"/Admin/students/1"}>
                            <Card />
                        </Link>
                        <Link href={"/Admin/students/1"}>
                            <Card />
                        </Link>
                        <Link href={"/Admin/students/1"}>
                            <Card />
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Home;