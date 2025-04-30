import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Book from "../../../public/icons/components/Book";

const Sidebar = () => {
    return (
       //Sidebar
        /*
                    "w-[350px]": navStatus && windowSize > 768,  // size of nav on bigger screens
            'w-[82vw] opacity-100': navStatus === true && windowSize <= 768,
            'hidden': navStatus === false && windowSize <= 768,
            'w-[75vw]': navStatus && windowSize <= 640,
             */

             /*max-md:absolute max-md:left-0 max-md:w-[82vw] max-xl:p-4  */
             <div className={clsx(`z-10 bg-black transition-all duration-1000 ease-in-out py-[40px] px-[20px] w-[300px] text-white h-[100vh] box-border rounded-2xl  flex flex-col flex-nowrap gap-[20px]`, {

             })}>
     
                 {/** ___child-1 */}
                 <div className='flex flex-row flex-nowrap gap-3'>
                     <div className='w-[45px] h-[45px] rounded-full bg-sharp'></div>
                     <div>
                         <h1 className='text-white text-2xl font-bold'>Student Panel</h1>
                         <p className='text-[13px] text-pinktext'>Student management system</p>
                     </div>
                 </div>
     
                 {/** ___child-2 */}
                 <div className='flex flex-row flex-nowrap gap-3 p-2 bg-medium rounded-lg items-center'>
                     <div className='w-[57px] h-[65px] rounded-lg overflow-hidden'>
                         <Image src={'/images/person.jpg'} alt='person image' width={43} height={43} className='object-cover object w-full h-full' />
                     </div>
                     <div>
                         <h1 className='text-white text-[19px] font-bold'>Zake Foster</h1>
                         <p className='text-[13px] text-gray-400'>Admin</p>
                     </div>
                 </div>
     
                 {/** ___child-3 */}
                 <h2 className='text-white font-bold'>
                     Main menu</h2>
                 {/** ___child-4 */}
                 <div className='flex flex-col flex-nowrap justify-start items-start gap-5'>
                 <Link href={"/example"} className='w-full'>
                                 <div className={`group transition-all duration-100 ease-in-out text-left p-3 bg-[rgba(34,33,54,0.9)] hover:bg-sharp hover:shadow-sharp rounded-lg text-[15px] font-bold`}>
                                     <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
                                         <Book className="group-hover:text-white text-gray-light"/><span className='group-hover:text-white'>Coursework</span>
                                     </div>
                                 </div>
                             </Link>
                     {
                         [
                             {
                                 name: "Dashboard",
                                 icon: "dashboard.svg",
                                 link: "/example",
                             },
                             {
                                 name: "Chats",
                                 icon: "chats.svg",
                                 link: "/example",
                             },
                             {
                                 name: "Events",
                                 icon: "events.svg",
                                 link: "/example",
                             },
                             {
                                 name: "Announcements",
                                 icon: "announcements.svg",
                                 link: "/example",
                             }
                         ].map(({ name, icon, link }: { name: string; icon: string; link: string }, index: number) => {
                             return <Link href={link} className='w-full' key={index}>
                                 <div className={`group transition-all duration-100 ease-in-out text-left p-3 bg-[rgba(34,33,54,0.9)] hover:bg-sharp hover:shadow-sharp rounded-lg text-[15px] font-bold`}>
                                     <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
                                         <Image src={`/icons/${icon}`} alt='Dashboard' width={24} height={24} /><span className='group-hover:text-white'>{name}</span>
                                     </div>
                                 </div>
                             </Link>
                         }
                         )
                     }
     
                 </div>
                 {/** ___child-5 */}
                 <h2 className='text-white font-bold'>
                     Main menu</h2>
     
                 {
                     [
                         {
                             name: "Finances",
                             icon: "finances.svg",
                             link: "/example",
                         },
                         {
                             name: "People",
                             icon: "people.svg",
                             link: "/example",
                         },
                         {
                             name: "Settings",
                             icon: "settings.svg",
                             link: "/example",
                         },
     
                     ].map(({ name, icon, link }: { name: string; icon: string; link: string }, index: number) => {
                         return <Link href={link} className='w-full' key={index}>
                             <div className={`group transition-all duration-100 ease-in-out text-left p-3 bg-[rgba(34,33,54,0.9)] hover:bg-sharp hover:shadow-sharp rounded-lg text-[15px] font-bold`}>
                                 <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
                                     <Image src={`/icons/${icon}`} alt='Dashboard' width={24} height={24} /><span className='group-hover:text-white'>{name}</span>
                                 </div>
                             </div>
                         </Link>
                     }
                     )
                 }
             </div>
    )
}


const Home = () => {
  return (
    <div className="flex h-screen bg-dark text-white p-[5px]">
        <Sidebar/>


      {/* Main content area */}
      <main className="flex-1 grid grid-rows-[auto_1fr] gap-4 p-2 sm:p-4">
        {/* Top Bar */}
        {/*max-[920px]:absolute max-[920px]:right-5 max-[920px]:top-4 */}
    <div className="border-2 border-solid border-white bg-green-400 p-3 rounded-lg text-gray-400 flex flex-nowrap justify-between items-center relative top-4 ">
      <h1 className="text-gray-400 font-bold text-[20px]">Events</h1>
      <div className="flex flex-row flex-nowrap gap-3 ">
        <i className="fa-solid fa-folder-closed"></i>
        <i className="fa-solid fa-message"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-bars-staggered" ></i>
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
