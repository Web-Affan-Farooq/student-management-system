"use client";
import React, {useContext, useState } from 'react';
import {OptionContext} from '@/context/option-context';
import Image from 'next/image';

const Sidenav = () => {
    const optionState = useContext(OptionContext);

  return (
    <div className='px-6 py-3 h-[95vh] box-border rounded-2xl w-[300px] max-xl:p-4 max-md:p-2 bg-black flex flex-col flex-nowrap gap-[25px]'>

        <div className='flex flex-row flex-nowrap gap-3'>
            <div className='w-[45px] h-[45px] rounded-full bg-sharp'></div>
            <div>
                <h1 className='text-white text-2xl font-bold'>Admin Panel</h1>
                <p className='text-[13px] text-pinktext'>Student management system</p>
            </div>
        </div>

        <div className='flex flex-row flex-nowrap gap-3 p-2 bg-graylight rounded-lg items-center'>
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
        <div className={`text-left p-3 bg-graylight rounded-lg text-[15px] font-bold`}>  
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-chart-line"></i> <span>Dashboard</span>
            </div>
        </div>

        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold'>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-comments"></i><span>Chat</span>
            </div>
        </div>

        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold'>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-users"></i> <span>Teacher</span>
            </div>
        </div>

        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold'>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-graduation-cap"></i> <span>Student</span>
            </div>
        </div>

        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold'>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-calendar"></i> <span>Events</span>
            </div>
        </div>

        <h2 className='text-white font-bold'>
            Main menu
        </h2>

        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold'>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-chart-simple"></i> <span>Finances</span>            </div>
        </div>
        
        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold'>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-utensils"></i> <span>Foods</span>                 </div>
        </div>
        <div className='text-left p-3 bg-graylight rounded-lg text-[15px] font-bold'>
            <div className='flex flex-row flex-wrap gap-4 text-gray-400 items-center'>
            <i className="fa-solid fa-gear"></i>  <span>Settings</span></div>
        </div>

    </div>
  )
}

export default Sidenav