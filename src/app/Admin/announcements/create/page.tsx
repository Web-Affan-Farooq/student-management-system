"use client";

import React from "react";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Sidebar from "../../../../components/Sidebar/Admin/Sidebar";
import Topnav from "../../Topnav";
import CreateAnnouncementsForm from "./CreateAnnouncementForm";

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
                <Topnav/>
                {/* Options Content */}

                <div className="scroll-container bg-black overflow-y-scroll border-2 h-[85vh] sm:p-6 rounded-lg max-sm:p-3">
                    <CreateAnnouncementsForm/>
                </div>
            </main>
        </div>
    );
};

export default Home;