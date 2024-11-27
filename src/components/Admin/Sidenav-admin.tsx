"use client";
import React, {useContext, useEffect, useState } from 'react';
import { NavContext } from '@/context/navcontext';
import { OptionContext } from '@/context/option-context';
import Image from 'next/image';

const Sidenav = () => {

    // options logic

    let optionState = useContext(OptionContext);


    // nav logic
    let navState = useContext(NavContext); // consuming context;
    // const [nav, setnav] = useState(navState?.navStatus); // ignore this error
    let nav = navState?.navStatus; // false

    // useEffect(() => {
    //     nav = !nav;
    //     console.log(nav);
    //     console.log("side nav effect");
        
    // },[navState?.navStatus]); // ignore this error



    // options interactivity
    const handleOptions = (e:React.MouseEvent<HTMLDivElement>) => {
        navState?.setnavStatus(!navState?.navStatus);
        // console.log(navState?.navStatus);
        // console.log(e.currentTarget.innerText);
        optionState?.setoption(e.currentTarget.innerText); // updating the context but not showing it
    }
    console.log(optionState);


    //max-[920px]:${nav? "hidden": "flex"} max-[920px]:absolute

    // 
  return (
    <div className={`px-6 py-3 h-auto lg:h-[95vh] relative box-border rounded-2xl w-[300px] max-xl:p-4 max-md:p-2 bg-black flex flex-col flex-nowrap gap-[25px] max-lg:w-[250px] max-lg:gap-[15px] max-lg:bg-blue-600 max-[920px]:${nav? "hidden absolute top-4 -translate-x-72": "absolute top-4 -translate-x-0"} transition-all z-10`}>

        <div className='flex flex-row flex-nowrap gap-3 max-lg:gap-2'>
            <div className='w-[45px] h-[45px] rounded-full bg-sharp'></div>
            <div>
                <h1 className='text-white text-2xl font-bold'>Admin Panel</h1>
                <p className='text-[13px] text-pinktext'>Student management system</p>
            </div>
        </div>

        <div className='flex flex-row flex-nowrap gap-3 p-2 max-lg:gap-2 max-lg:p-[7px] bg-graylight rounded-lg items-center'>
            <Image src={'/images/person-2.jpg'} alt='person image' width={43} height={43} className='object-cover rounded-full'/>
            <div>
            <h1 className='text-white text-[19px] font-bold'>Zake Foster</h1>
            <p className='text-[13px] text-gray-400'>Admin</p>          
              </div>
        </div>

        <h2 className='text-white font-bold'>
            Main menu
        </h2>

{/* implement logic */}
        <div className={`text-left p-3 bg-graylight rounded-lg text-[15px] font-bold`} onClick={handleOptions}>  
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-chart-line"></i> <span>Dashboard</span>
            </div>
        </div>

        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold' onClick={handleOptions}>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-comments"></i><span>Chat</span>
            </div>
        </div>

        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold' onClick={handleOptions}>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-users"></i> <span>Teachers</span>
            </div>
        </div>

        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold' onClick={handleOptions}>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-graduation-cap"></i> <span>Student</span>
            </div>
        </div>

        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold' onClick={handleOptions}>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-calendar"></i> <span>Events</span>
            </div>
        </div>

        <h2 className='text-white font-bold'>
            Main menu
        </h2>

        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold' onClick={handleOptions}>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-chart-simple"></i> <span>Finances</span>            </div>
        </div>
        
        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold' onClick={handleOptions}>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-utensils"></i> <span>Foods</span>                 </div>
        </div>
        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold' onClick={handleOptions}>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-gear"></i>  <span>Settings</span></div>
        </div>

    </div>
  )
}

export default Sidenav;