import React from 'react'

const CreateEventForm= () => {
  return (
    <main className='flex h-screen bg-dark text-white p-[5px]'>
        <div>
            <h1 className='text-[30px] font-bold text-white'>New Event</h1>

            <form action="">
                <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                <label htmlFor="Name of your event" className='text-[15px] text-gray-400' id='event-name'>Name of event</label>
                <input type="text" name='eventname' id='event-name' required className='px-[20px] py-[10px] bg-medium w-[300px] rounded-md
            '/>
                </div>

                <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                <label htmlFor="Date of your event" className='text-[15px] text-gray-400' id='event-date'>Event date</label>
                <input type="date" name='eventDate' id='event-date' required className='px-[20px] py-[10px] bg-medium w-[300px] rounded-md
            '/>
                </div>

                <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                <label htmlFor="Type of your event" className='text-[15px] text-gray-400' id='event-type'>Event type</label>
                <select name='eventType' id='event-type' required className='px-[20px] py-[10px] bg-medium w-[300px] rounded-md
            '>
                <option value="Class test">Class test</option>
                <option value="Trip">Trip</option>
            </select>
                </div>

                <div className='flex flex-col flex-nowrap gap-5 p-[20px]'>
                <label htmlFor="Enter a short description of your event" className='text-[15px] text-gray-400' id='event-description'>Event description</label>
                <textarea name='eventDescription' id='event-name' required className='px-[20px] h-[100px] py-[10px] bg-medium w-[300px] rounded-md
            '></textarea>
                </div>
                <br />
                <div className='px-[30px]'>
                <button type="submit" className="bg-sharp px-[20px] py-[7px] rounded-md font-bold transition-background duration-200 ease-in-out hover:shadow-sharp-medium">{/* plus icon */}Create event </button>

                </div>
            </form>
        </div>
    </main>
  )
}

export default CreateEventForm