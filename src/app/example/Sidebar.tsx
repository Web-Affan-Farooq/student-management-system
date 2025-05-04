"use client";

import "./style.css"
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";

/* Importing Hooks */
import { useSidebarVisibility } from "@/stores/SidebarVisibility";

/* Importing custom icon components */
import Book from "../../../public/icons/Sidebar/Book";
import People from "../../../public/icons/Sidebar/People";
import Chats from "../../../public/icons/Sidebar/Chats";
import Events from "../../../public/icons/Sidebar/Events";
import Announcements from "../../../public/icons/Sidebar/Announcements";
import Settings from "../../../public/icons/Sidebar/Settings";
import { AppWindowMac } from "lucide-react";

const ManipulateLink = () => {
    const { updateSidebarVisibility } = useSidebarVisibility();

    /* link options on sidebar */

    const links: any = {
        "Main menu": [
            {
                name: "Coursework",
                link: "/example",
                icon: <Book className="group-hover:text-white text-gray-light" />
            },
            {
                name: "People",
                link: "/example/people",
                icon: <People className="group-hover:text-white text-gray-light" />
            },
            {
                name: "Chats",
                link: "/example",
                icon: <Chats className="group-hover:text-white text-gray-light" />
            },
            {
                name: "Events",
                link: "/example/events",
                icon: <Events className="group-hover:text-white text-gray-light" />
            },
            {
                name: "Announcements",
                link: "/example",
                icon: <Announcements className="group-hover:text-white text-gray-light" />
            },
        ],
        "Account": [
            {
                name: "Settings",
                link: "/example",
                icon: <Settings className="group-hover:text-white text-gray-light" />
            },
        ]
    }

    const keys = Object.keys(links);

    return keys.map((category, index) => {
        return (
            <div key={index}>
                <h2 className='text-white font-bold'>{category}</h2>
                <br />
                <div className='flex flex-col flex-nowrap justify-start items-start gap-5'>
                    {
                        links[category].map((link: any, idx: number) => {
                            return <Link href={link.link} className='w-full' key={idx} onClick={() => {
                                updateSidebarVisibility();
                            }}>
                                <div className={`group transition-all duration-100 ease-in-out text-left p-3 bg-[rgba(34,33,54,0.9)] hover:bg-sharp hover:shadow-sharp rounded-lg text-[15px] font-bold`}>
                                    <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
                                        {link.icon}<span className='group-hover:text-white'>{link.name}</span>
                                    </div>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>
        )
    })
}


const Sidebar = () => {
    /* Main sidebar component */
    const { sidebarVisibility } = useSidebarVisibility();
    const [windowSize, setwindowSize] = useState<number>(0);
    // console.log(navStatus);

    useEffect(() => {
        const updateWidth = () => {
            setwindowSize(window.innerWidth)
        }
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        }
    }, []);

    return (
        //Sidebar
        /*
                        "w-[350px]": navStatus && windowSize > 768,  // size of nav on bigger screens
            'w-[82vw] opacity-100': navStatus === true && windowSize <= 768,
            'hidden': navStatus === false && windowSize <= 768,
            'w-[75vw]': navStatus && windowSize <= 640,
        */
        <div className={clsx(`scroll-container z-10 bg-black transition-all duration-400 ease-in-out py-[40px] px-[20px] w-[300px] text-white h-[100vh] overflow-y-scroll box-border rounded-2xl max-mid:absolute max-mid:top-0 max-mid:left-0 max-mid:w-[80vw] flex flex-col flex-nowrap gap-[20px]`, {
            "":sidebarVisibility && windowSize > 950, // sidebar visible state but windowsize > 950
            "":!sidebarVisibility && windowSize > 950, // sidebar visible state but windowsize > 950
            "translate-x-0":sidebarVisibility && windowSize < 950, // sidebar visible state but windowsize > 950
            "-translate-x-[120vw]":!sidebarVisibility && windowSize < 950, // sidebar visible state but windowsize > 950
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
            <ManipulateLink />
        </div>
    )
}

export default Sidebar;