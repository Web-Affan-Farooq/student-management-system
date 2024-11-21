import React from "react";

const Topnav = () => {
  return (
    <div className="text-white border-2 border-solid border-white w-[65vw] p-3 flex flex-row flex-wrap justify-between items-center">
      <h1 className="text-gray-400 font-bold text-[20px]">
        <i className="fa-solid fa-bars-staggered"></i> Events
      </h1>

      <div className="flex flex-row flex-wrap gap-3 items-center">
        <div className="w-auto rounded-2xl bg-dark">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here .."
            required
            className="px-[20px] w-[270px] py-2 rounded-2xl outline-none bg-dark"
          />
          <button type="button" className="p-2 rounded-2xl">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="flex flex-row flex-nowrap gap-4 justify-center items-center text-gray-400 text-[20px]">
          <i className="fa-solid fa-folder-closed"></i>
          <i className="fa-solid fa-message"></i>
          <i className="fa-solid fa-bell"></i>
        </div>

      </div>

    </div>
  );
};

export default Topnav;
