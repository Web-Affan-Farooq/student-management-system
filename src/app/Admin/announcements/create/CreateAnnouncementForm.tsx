"use client";
import React, { useRef } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import "./style.css";
import { Calendar } from '@/components/ui/calendar';
import Calender from '../../../../../public/icons/Calender';
// import { Calendar } from "@/components/ui/calendar";

// const DatePicker = () => {
//   const [date, setDate] = React.useState<Date | undefined>(new Date())

//   return (
//     <Calendar
//       mode="single"
//       selected={date}
//       onSelect={setDate}
//       className="rounded-md text-pink"
//     />
//   )

// }


const CreateAnnouncementsForm = () => {
    const datePickerRef = useRef<HTMLInputElement | null>(null);
    return (
        <main className='flex h-auto bg-dark text-white p-[5px]'>
            <div>
                <div className='p-6'>
                    <h1 className='text-[30px] font-bold text-white'>🚀 &nbsp;New Announcement</h1>

                </div>
                <form action="">
                    <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                        <label htmlFor="title of announcement" className='text-[15px] text-gray-400' id='announcement-title'>Announcement title</label>
                        <input type="text" name='announcementTitle' id='announcement-title' required className='px-[20px] py-[10px] bg-medium w-[300px] rounded-md
            '/>
                    </div>

                    <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                        <label htmlFor="Description of announcement" className='text-[15px] text-gray-400' id='announcement-description'>Announcement description</label>
                        <textarea name='announcementDescription' id='announcement-description' required className='px-[20px] py-[10px] bg-medium md:w-[500px] md:h-[100px] sm:w-[500px] sm:h-[100px] max-sm:w-[80vw] max-sm:h-[100px] rounded-md'></textarea>
                    </div>
                    <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                        <div className='flex flex-row flex-nowrap justify-start items-center gap-[20px]'>
                            <label htmlFor="Date for reminder" className='text-[15px] text-gray-400' id='date-reminder'>Date reminder</label>                  
                              <span className='bg-medium px-[10px] py-[4px] text-pink rounded-md text-[12px]'>Optional</span>
                        </div>
                        <div className='relative'>
                            <input type="date" ref={datePickerRef} className=' custom-date px-[20px] py-[10px] bg-medium w-[300px] rounded-md' />
                            <Calender className='absolute right-10 top-4 text-pink' size={{
                                width: 15,
                                height: 15,
                            }} onClick={() => {
                                datePickerRef.current?.showPicker();                                
                            }} />
                        </div>
                    </div>

                    <br />
                    <div className='px-[30px]'>
                        <button type="submit" className="bg-sharp px-[20px] py-[7px] rounded-md font-bold transition-background duration-200 ease-in-out hover:shadow-sharp-medium">Create announcement </button>
                    </div>
                    <br /><br /><br /><br />
                </form>
            </div>
        </main>
    )
}

export default CreateAnnouncementsForm;