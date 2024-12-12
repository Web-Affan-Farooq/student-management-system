import React from "react";

const Home = () => {
return(
    <div className="p-1 sm:p-3 h-[100vh] bg-dark text-white grid grid-cols-4 grid-rows-5 gap-3">
        <div className="bg-red-900 row-span-5 rounded-lg p-3 max-md:absolute max-md:w-[280px] max-md:h-[90vh]">
            Side bar
        </div>
        <div className="p-3 rounded-lg bg-green-400 col-span-3 max-md:col-span-4">
            top bar
        </div>
        <div className="p-3 rounded-lg bg-yellow-500 col-span-2 row-span-4">
            options
        </div>
        <div className="p-3 rounded-lg bg-blue-600 row-span-4 max-md:col-span-2">
            messages
        </div>
    </div>
)
}
export default Home;