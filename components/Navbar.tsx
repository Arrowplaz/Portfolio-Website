import React from "react";

import DarkModeToggle from "./DarkModeToggle"; 

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] flex justify-between items-center px-10 md:px-20 p-4 shadow-lg bg-white dark:bg-[#1F1B24]">
      <div className="flex flex-row items-center">

        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FCA317] dark:bg-[#5A189A]" />

        <h1 className="text-[25px] font-semibold ml-3"> 
        <a href="/">
          <span className="text-[#141F3D] dark:text-white">
            Abhiroop Reddy Nagireddygari
          </span>
        </a>
        </h1>
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default Navbar;
