"use client";

import "./style.css";

import React from "react";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Sidebar from "../../components/Sidebar/Admin/Sidebar";
import Topnav from "./Topnav";

const Home = () => {
  const { sidebarVisibility, updateSidebarVisibility } = useSidebarVisibility();

  return (
    <div className="flex h-screen bg-dark text-white p-[5px]">
      <Sidebar />
      {/* Main content area */}
      <main className="flex-1 grid grid-rows-[auto_1fr] gap-4 p-2 sm:p-4">
        {/* Top Bar */}
        {/*max-[920px]:absolute max-[920px]:right-5 max-[920px]:top-4 */}
        <Topnav/>
        {/* Options Content */}
        <div className="bg-yellow-500 p-4 rounded-lg">
          Options
        </div>
      </main>
    </div>
  );
};

export default Home;

// import React from "react";

// const Home = () => {
//   return (
//     <div className="flex h-screen bg-dark text-white">
//       {/* Sidebar */}
//       <aside className="bg-red-900 w-64 p-4 rounded-lg hidden md:block">
//         Sidebar
//       </aside>

//       {/* Main content area */}
//       <main className="flex-1 grid grid-rows-[auto_1fr] gap-4 p-2 sm:p-4">
//         {/* Top Bar */}
//         <header className="bg-green-500 p-4 rounded-lg">
//           Top Bar
//         </header>

//         {/* Options Content */}
//         <div className="bg-yellow-500 p-4 rounded-lg">
//           Options
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;
