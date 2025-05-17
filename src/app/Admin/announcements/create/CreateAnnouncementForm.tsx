import React from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import DatePicker from './DatePicker';

const CreateAnnouncementsForm = () => {
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
                        <label htmlFor="Description of announcement" className='text-[15px] text-gray-400' id='announcement-description'>Announcement description</label>
                        <DatePicker/>
                    </div>



                    <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                        <label htmlFor="duration of course" className='text-[15px] text-gray-400' id='course-duration'>Course duration</label>
                        <select name='courseDuration' id='course-duration' required className='px-[20px] py-[10px] bg-medium md:w-[500px] md:h-[50px] sm:w-[500px] sm:h-[50px] max-sm:w-[80vw] max-sm:h-[50px] rounded-md'>
                            <option value="1 Week">1 Week</option>
                            <option value="2 Week">2 Week</option>
                            <option value="3 Week">3 Week</option>
                            <option value="1 month">1 month</option>
                            <option value="5 Week">5 Week</option>
                            <option value="6 Week">6 Week</option>
                            <option value="7 Week">7 Week</option>
                            <option value="2 months">2 Months</option>
                            <option value="9 Week">9 Week</option>
                            <option value="10 Week">10 Week</option>
                            <option value="11 Week">11 Week</option>
                            <option value="3 months">3 Months</option>
                        </select>
                    </div>

                    <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                        <label htmlFor="Main teacher of course" className='text-[15px] text-gray-400' id='course-head-teacher'>Main teacher</label>
                        <select name='courseMainTeacher' id='course-head-teacher' required className='px-[20px] py-[10px] bg-medium md:w-[500px] md:h-[50px] sm:w-[500px] sm:h-[50px] max-sm:w-[80vw] max-sm:h-[50px] rounded-md'>
                            <option value="Name-1">Name-1</option>
                            <option value="Name-1">Name-1</option>
                            <option value="Name-1">Name-1</option>
                            <option value="Name-1">Name-1</option>
                        </select>
                    </div>

                    <div className='p-[20px]'>
                        <label htmlFor="Helper teachers (if any)" className='text-[15px] text-gray-400' id='course-helper-teachers'>Helper teachers (if any) </label>

<br />
<br />
                        <div className='px-[20px] flex flex-col flex-nowrap gap-[10px]'>

                            <div className='flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
                                <Checkbox className='border-none bg-medium' /><label htmlFor="select Teacher name to be helper" className='text-pink-text'>Teacher name</label>
                            </div>
                            <div className='flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
                                <Checkbox className='border-none bg-medium' /><label htmlFor="select Teacher name to be helper" className='text-pink-text'>Teacher name</label>
                            </div>
                            <div className='flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
                                <Checkbox className='border-none bg-medium' /><label htmlFor="select Teacher name to be helper" className='text-pink-text'>Teacher name</label>
                            </div>
                            <div className='flex flex-row flex-nowrap justify-start items-center gap-[10px]'>
                                <Checkbox className='border-none bg-medium' /><label htmlFor="select Teacher name to be helper" className='text-pink-text'>Teacher name</label>
                            </div>
                            
                        </div>
                    </div>
 
<br />
                    <div className='px-[30px]'>
                        <button type="submit" className="bg-sharp px-[20px] py-[7px] rounded-md font-bold transition-background duration-200 ease-in-out hover:shadow-sharp-medium">Create course </button>
                    </div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </form>
            </div>
        </main>
    )
}

export default CreateAnnouncementsForm;