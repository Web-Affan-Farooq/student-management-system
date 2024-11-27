"use client";
import React, { useState } from "react";
import Box from "./Box";
import Days from "./Days";


const Calender = () => {
    const [dateToBeShown, setdateToBeShown] = useState<string>("");

    let date = new Date();
    const dateRequired = () => {
        if(date.getMonth() === 1) {
            return `January ${date.toDateString().slice(11,15)}`; 
        }
        else if (date.getMonth() === 2) {
            return `February ${date.toDateString().slice(11,15)}`
        }
        else if (date.getMonth() === 3) {
            return `March ${date.toDateString().slice(11,15)}`
        }
        else if (date.getMonth() === 4) {
            return `April ${date.toDateString().slice(11,15)}`
        }
        else if (date.getMonth() === 5) {
            return `May ${date.toDateString().slice(11,15)}`
        }
        else if (date.getMonth() === 6) {
            return `June ${date.toDateString().slice(11,15)}`
        }
        else if (date.getMonth() === 7) {
            return `July ${date.toDateString().slice(11,15)}`
        }
        else if (date.getMonth() === 8) {
            return `August ${date.toDateString().slice(11,15)}`
        }
        else if (date.getMonth() === 9) {
            return `September ${date.toDateString().slice(11,15)}`
        }
        else if (date.getMonth() === 10) {
            return `October ${date.toDateString().slice(11,15)}`
        }
        else if (date.getMonth() === 11) {
            return `November ${date.toDateString().slice(11,15)}`
        }
        else if (date.getMonth() === 12) {
            return `December ${date.toDateString().slice(11,15)}`
        }
    }

  return (
    <div className="w-[65vw] p-2 border-2 border-solid border-white">

      <div className="flex flex-row flex-nowrap justify-between items-center border-2 border-solid border-white">
        <div>
        <h1 className="text-[20px] font-bold text-gray-400">{date.getMonth()}</h1>
        </div>
        <div className="flex flex-row flex-nowrap gap-3">
        <button type="button" className="bg-sharp p-3 text-white rounded-lg">
          <i className="fa-solid fa-angles-left"></i>
        </button>
        <button type="button" className="bg-sharp p-3 text-white rounded-lg">
          <i className="fa-solid fa-angles-right"></i>
        </button>
        </div>
      </div>

      <div className="grid grid-cols-7 grid-rows-5 gap-x-0 gap-y-4 justify-center items-center">
        <Days text="Monday"/>
        <Days text="Tuesday"/>
        <Days text="Wednesday"/>
        <Days text="Thursday"/>
        <Days text="Friday"/>
        <Days text="Saturday"/>
        <Days text="Sunday"/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>

        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>

        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>

        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>

      </div>

    </div>
  );
};

export default Calender;