"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/* Importing sidebar visibility state */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing important components ... */
import Sidebar from "@/components/Sidebar/Teacher/Sidebar";
import Topnav from "../Topnav";
import Plus from "../../../../public/icons/Plus";

/* Create dynamic users profile page with this design    https://dribbble.com/shots/17859331-Momentz-Social-Media-App */

/* avatar  badge  tooltip*/

const Card = () => {
    return (
        <div className="rounded-md flex flex-col flex-nowrap bg-dark
        max-sm:p-[20px] max-sm:gap-5
        sm:p-[30px] sm:gap-3
        md:p-[30px] md:gap-3 ">
            <h1 className="font-bold text-[20px] ">
                heading of events udfu diofudiodjfkd fkdf
            </h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti porro impedit incidunt commodi quae harum nobis dolorum necessitatibus, doloremque nam, mollitia qui earum natus vero sunt possimus voluptate tenetur iure!</p>
            <div className="w-full flex flex-row flex-nowrap justify-start items-center gap-5">
                <button type="button" className="font-semibold text-white py-[4px] px-[10px] rounded-md bg-sharp shadow-sharp-medium text-[14px]">{/* attach visible eye icon */}View event</button>

                {/* <div className="relative flex flex-row flex-nowrap  items-center border-2 border-solid border-white">
                    <div className="flex-shrink-0">
                        <div className="border-2 border-solid border-gray-600 rounded-full w-[50px] h-[50px] overflow-hidden">
                            <Image
                                src="/images/person-2.jpg"
                                alt="Muhammad Affan"
                                width={90}
                                height={90}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="flex-shrink-0 -translate-x-[25px] ">
                        <div className="border-2 border-solid border-gray-600 rounded-full w-[50px] h-[50px] overflow-hidden">
                            <Image
                                src="/images/person-2.jpg"
                                alt="Muhammad Affan"
                                width={90}
                                height={90}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="flex-shrink-0 -translate-x-[50px]">
                        <div className="border-2 border-solid border-gray-600 rounded-full w-[50px] h-[50px] overflow-hidden">
                            <Image
                                src="/images/person-2.jpg"
                                alt="Muhammad Affan"
                                width={90}
                                height={90}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="flex-shrink-0 -translate-x-[75px]">
                        <div className="border-2 border-solid border-gray-600 rounded-full w-[50px] h-[50px] overflow-hidden">
                            <Image
                                src="/images/person-2.jpg"
                                alt="Muhammad Affan"
                                width={90}
                                height={90}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="flex-shrink-0 -translate-x-[100px]">
                        <div className="border-2 border-solid border-gray-600 rounded-full w-[50px] h-[50px] overflow-hidden">
                            <Image
                                src="/images/person-2.jpg"
                                alt="Muhammad Affan"
                                width={90}
                                height={90}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                </div> */}

                {/* <p className="text-gray-400 text-[13px]">+169 more</p> */}

            </div>

        </div>
    )
}

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

                <div className="scroll-container overflow-y-scroll bg-black h-screen sm:p-6 rounded-lg max-sm:p-3">

                                        <div className="flex flex-row flex-wrap justify-between items-center">
                    
                                            <div className="font-bold flex flex-row flex-nowrap justify-start items-center">
                                                <Image src="/icons/glass-icons/people.svg" alt="people" width={90} height={90} className="translate-y-[3px] max-md:w-[70px] max-sm:h-[70px]"/><span className="max-sm:text-[22px] sm:text-[22px] md:text-[25px]">Events</span>
                                            </div>
                    
                                            <Link href={"/example/events/create"}>
                                                <button type="button" className="bg-sharp px-[15px] py-[8px] rounded-md font-bold shadow-sharp-medium flex flex-row flex-nowrap justify-center items-center gap-1"><Plus />Create</button>
                                            </Link>
                                        </div>
                    

                    {/* <div className="flex flex-row flex-wrap justify-between items-center">

                        <div className="text-[25px] font-bold flex flex-row flex-nowrap justify-start items-center">
                            <Image src="/icons/glass-icons/people.svg" alt="people" width={90} height={90} /><span>Events</span>
                        </div>

                        <Link href={"/example/events/create"}>
                        <button type="button" className="bg-sharp px-[15px] py-[8px] rounded-md font-bold shadow-sharp-medium flex flex-row flex-nowrap justify-center items-center gap-1"><Plus/>Create Event</button>
                        </Link>
                    </div> */}
                    <br /><br />
                    <div className="flex flex-col gap-[8px] h-full">
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