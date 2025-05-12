"use client";

import "../../style.css";
import React from "react";
import Image from "next/image";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Sidebar from "../../../../components/Sidebar/Admin/Sidebar";
import Topnav from "../../Topnav";
import Clock from "../../../../../public/icons/Clock";
import Degree from "../../../../../public/icons/sidebar/Degree";
import People from "../../../../../public/icons/sidebar/People";

/* Create dynamic users profile page with this design    https://dribbble.com/shots/17859331-Momentz-Social-Media-App */

/* avatar  badge  tooltip*/


const Card = () => {
    return (
        <div className="border-2 border-solid border-white flex items-center gap-4 md:px-[30px] py-2 w-full rounded-md">

            {/* Profile Image */}
            <div className="flex-shrink-0">
                <div className="rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                        src="/images/person-2.jpg"
                        alt="Muhammad Affan"
                        width={90}
                        height={90}
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
                    <h4 className="text-white text-[15px] font-bold leading-tight truncate w-0 flex-grow">
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
            <main className="flex-1 h-[100vh] grid grid-rows-[auto_1fr] gap-4 p-2 sm:p-0">
                {/* Top Bar */}
                {/*max-[920px]:absolute max-[920px]:right-5 max-[920px]:top-4 */}
                <Topnav />
                {/* Options Content */}

                <div className="scroll-container bg-black h-screen sm:p-6 max-sm:p-3 overflow-y-scroll">
                    <div className="flex flex-row flex-wrap justify-between items-center">
                        <div className="font-bold flex flex-row flex-nowrap justify-start items-center">
                            <Image src="/icons/glass-icons/people.svg" alt="people" width={90} height={90} className="translate-y-[3px] max-md:w-[70px] max-sm:h-[70px]" /><span className="max-sm:text-[22px] sm:text-[22px] md:text-[25px]">Course Name </span>
                        </div>
                        <div></div>

                    </div>

                    <div>
                        <h1 className="px-[10px] font-bold text-gray-400 text-[20px] tracking-[0.25px]">People</h1>
                    </div>
                    <br />
<>
<div className="flex flex-row flex-wrap justify-start items-center gap-[10px]">
    <>
  <div className="relative flex items-center gap-3 px-4 py-2 bg-medium rounded-lg shadow-md w-fit">
    {/* People Icon */}
    <div className="relative">
      <Degree className="text-pink" size={{ width: 24, height: 24 }} />
      {/* Notification Badge */}
      <span className="absolute -top-2 -right-2 bg-link w-[20px] h-[20px] rounded-full text-[11px] text-white font-medium flex items-center justify-center shadow">
        2
      </span>
    </div>

    {/* Title */}
    <h2 className="text-[20px] font-bold text-white">Assigned Teachers</h2>
  </div>
</>

<>
  <div className="relative flex items-center gap-3 px-4 py-2 bg-medium rounded-lg shadow-md w-fit">
    {/* People Icon */}
    <div className="relative">
      <People className="text-pink" size={{ width: 24, height: 24 }} />
      {/* Notification Badge */}
      <span className="absolute -top-2 -right-2 bg-link w-[20px] h-[20px] rounded-full text-[11px] text-white font-medium flex items-center justify-center shadow">
        20
      </span>
    </div>

    {/* Title */}
    <h2 className="text-[20px] font-bold text-white">Enrolled Students</h2>
  </div>
</>
</div>

</>


                    <br /><br />
                </div>
            </main>
        </div>
    );
};

export default Home;