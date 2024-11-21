import React from "react";
import Sidenav from "@/components/Sidenav/Sidenav";
import Topnav from "@/components/Topnav/Topnav";
import Calender from "@/components/Calender/Calender";

const Home = () => {
  return (
    <div className="p-3 h-[100vh] bg-dark">
      <div className="flex flex-row flex-wrap justify-between items-center">
        <Sidenav />
        <div>
          <Topnav/>
          <div className="flex flex-row flex-wrap">
            <Calender/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
