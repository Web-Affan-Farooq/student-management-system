"use client";
import { NavContext } from '@/context/Navcontext';
import { OptionContext } from '@/context/OptionContext';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import Image from 'next/image';

const Sidebar = () => {
    const [option, setOption] = useContext(OptionContext);
    const [navStatus, setNavStatus] = useContext(NavContext);
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
        // bg-black max-md:p-2 w-[300px] h-[100vh]
        <div className={clsx(`z-10 bg-black transition-all duration-1000 ease-in-out p-[20px] w-[300px] text-white max-md:absolute max-md:left-0 max-md:w-[82vw] px-6 py-3 h-[95vh] box-border rounded-2xl max-xl:p-4 flex flex-col flex-nowrap gap-[20px]`, {
            "w-[350px]": navStatus && windowSize > 768,  // size of nav on bigger screens
            'w-[82vw] opacity-100': navStatus === true && windowSize <= 768,
            'hidden': navStatus === false && windowSize <= 768,
            'w-[75vw]': navStatus && windowSize <= 640,
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
                {
                    [
                        {
                            name: "Dashboard",
                            icon: "dashboard.svg",
                            link: "/",
                        },
                        {
                            name: "Chats",
                            icon: "chats.svg",
                            link: "/",
                        },
                        {
                            name: "Progress",
                            icon: "progress.svg",
                            link: "/",
                        },
                        {
                            name: "Events",
                            icon: "events.svg",
                            link: "/",
                        },
                        {
                            name: "Announcements",
                            icon: "announcements.svg",
                            link: "/",
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

                {/*
                        sharp:"#733FEB",
        dark:"#0b0d2e",
        medium:"#202242",
        graylight: "#515691",
        pinktext:"#9185df",
        pink:"#d69ccd",
        

        background: "#2117d4",
        foreground: "var(--foreground)",
        link:'#60c5db'
                 */}

            </div>
            {/** ___child-5 */}
            <h2 className='text-white font-bold'>
                Main menu</h2>

            {
                [
                    {
                        name: "Finances",
                        icon: "finances.svg",
                        link: "/",
                    },
                    {
                        name: "People",
                        icon: "people.svg",
                        link: "/",
                    },
                    {
                        name: "Settings",
                        icon: "settings.svg",
                        link: "/",
                    },

                ].map(({ name, icon, link }: { name: string; icon: string; link: string }, index: number) => {
                    return <Link href={link} className='w-full' key={index}>
                        <div className={`group transition-all duration-100 ease-in-out text-left p-3 bg-[rgba(34,33,54,0.9)] hover:bg-sharp hover:shadow-sharp rounded-lg text-[15px] font-bold`} onClick={() => {
                            setOption(name)
                        }}>
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

export default Sidebar;