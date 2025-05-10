"use client";

import React from "react";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Sidebar from "../../../../components/Sidebar/Admin/Sidebar";
import Topnav from "../../Topnav";
import CreateEventForm from "./CreateEventForm";

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
                <Topnav/>
                {/* Options Content */}

                <div className="bg-black h-screen sm:p-6 rounded-lg max-sm:p-3">
                    <div className="flex flex-row flex-wrap justify-between items-center">

                    </div>
                    {/* <br /><br /> */}
                    <CreateEventForm/>
                </div>
            </main>
        </div>
    );
};

export default Home;