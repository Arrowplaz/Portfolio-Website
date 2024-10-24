import { Socials } from "@/constants";
import React from "react";
import Image from "next/image";
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

      <div className="flex flex-row gap-5 mb-2 items-center border border-white rounded-lg bg-white"> 
        {Socials.map((social) => (
          <a 
            className="flex items-center hover:bg-gray-300 rounded p-1 duration-200" 
            key={social.name} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Link to ${social.name}`} 
          >
            <Image
              src={social.src}
              alt={`Link to ${social.name}`} 
              width={28}
              height={28}
            />
          </a>
        ))}
        <DarkModeToggle /> 
      </div>
    </div>
  );
};

export default Navbar;
