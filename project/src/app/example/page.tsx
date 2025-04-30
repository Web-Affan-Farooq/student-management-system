"use client";

import React from "react";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Sidebar from "./Sidebar";

const Home = () => {
   const {sidebarVisibility,updateSidebarVisibility} = useSidebarVisibility();
  
   return (
    <div className="flex h-screen bg-dark text-white p-[5px]">
        <Sidebar/>
      {/* Main content area */}
      <main className="flex-1 grid grid-rows-[auto_1fr] gap-4 p-2 sm:p-4">
        {/* Top Bar */}
        {/*max-[920px]:absolute max-[920px]:right-5 max-[920px]:top-4 */}
    <div className="border-2 border-solid border-white bg-black p-3 rounded-lg text-gray-400 flex flex-nowrap justify-between items-center relative top-4 ">
      <h1 className="text-gray-400 font-bold text-[20px]">Events</h1>
      <div className="flex flex-row flex-nowrap gap-3 ">
        <i className="fa-solid fa-folder-closed"></i>
        <i className="fa-solid fa-message"></i>
        <i className="fa-solid fa-bell"></i>
        {sidebarVisibility? <i className="fa-solid fa-bars" onClick={() => {
            updateSidebarVisibility();
        }}></i>: <i className="fa-solid fa-xmark" onClick={() => {
            updateSidebarVisibility();
        }}></i>}
      </div>
    </div>

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
