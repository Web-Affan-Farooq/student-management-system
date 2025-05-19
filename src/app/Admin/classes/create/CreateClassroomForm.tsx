"use client";
import React, { useRef } from 'react';
import "./style.css";
import Calender from '../../../../../public/icons/Calender';
import { Checkbox } from '@/components/ui/checkbox';
import Clock from '../../../../../public/icons/Clock';

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


const CreateClassroomsForm = () => {
    const datePickerRef = useRef<HTMLInputElement | null>(null);
    return (
        <main className='flex h-auto bg-dark text-white p-[5px]'>
            <div>
                <div className='p-6'>
                    <h1 className='text-[30px] font-bold text-white'>🚀 &nbsp;New Classroom</h1>

                </div>
                <form action="">
                    <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                        <label htmlFor="title of classroom" className='text-[15px] text-gray-400' id='classroom-title'>Classroom title</label>
                        <input type="text" name='classroomTitle' id='classroom-title' required className='px-[20px] py-[10px] bg-medium w-[300px] rounded-md
            '/>
                    </div>

                    <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                        <label htmlFor="Description of classroom" className='text-[15px] text-gray-400' id='classroom-description'>Classroom description</label>
                        <textarea name='classroomDescription' id='classroom-description' required className='px-[20px] py-[10px] bg-medium md:w-[500px] md:h-[100px] sm:w-[500px] sm:h-[100px] max-sm:w-[80vw] max-sm:h-[100px] rounded-md'></textarea>
                    </div>

                    <div className='p-[20px]'>
                        <label htmlFor="Select days for classes" className='text-[15px] text-gray-400' id='classes-days'>Select class days </label>

                        <br />
                        <br />
                        <div className='px-[20px] flex flex-col flex-nowrap gap-[10px]'>

                            <div className='flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
                                <Checkbox className='border-none bg-medium' /><label htmlFor="Monday" className='text-pink-text'>Monday</label>
                            </div>
                            <div className='flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
                                <Checkbox className='border-none bg-medium' /><label htmlFor="Tuesday" className='text-pink-text'>Tuesday</label>
                            </div>
                            <div className='flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
                                <Checkbox className='border-none bg-medium' /><label htmlFor="Wednesday" className='text-pink-text'>Wednesday</label>
                            </div>
                            <div className='flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
                                <Checkbox className='border-none bg-medium' /><label htmlFor="Thursday" className='text-pink-text'>Thursday</label>
                            </div>
                            <div className='flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
                                <Checkbox className='border-none bg-medium' /><label htmlFor="Friday" className='text-pink-text'>Friday</label>
                            </div>
                            <div className='flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
                                <Checkbox className='border-none bg-medium' /><label htmlFor="Saturday" className='text-pink-text'>Saturday</label>
                            </div>
                            <div className='flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
                                <Checkbox className='border-none bg-medium' /><label htmlFor="Sunday" className='text-pink-text'>Sunday</label>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                        <div className='flex flex-row flex-nowrap justify-start items-center gap-[20px]'>
                            <label htmlFor="Class timings" className='text-[15px] text-gray-400' id='class-timings'>Class timings</label>
                            {/* <span className='bg-medium px-[10px] py-[4px] text-pink rounded-md text-[12px]'>Optional</span> */}
                        </div>
                        <div className='relative'>
                            <input type="time" ref={datePickerRef} className=' custom-date px-[20px] py-[10px] bg-medium w-[300px] rounded-md' />
                            <Clock className='absolute right-10 top-4 text-pink' size={{
                                width: 15,
                                height: 15,
                            }} onClick={() => {
                                datePickerRef.current?.showPicker();
                            }} />
                        </div>
                    </div>

                    <br />
                    <div className='px-[30px]'>
                        <button type="submit" className="bg-sharp px-[20px] py-[7px] rounded-md font-bold transition-background duration-200 ease-in-out hover:shadow-sharp-medium">Create classroom </button>
                    </div>
                    <br /><br /><br /><br />
                </form>
            </div>
        </main>
    )
}

export default CreateClassroomsForm;