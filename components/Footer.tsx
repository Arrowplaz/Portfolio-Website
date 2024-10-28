import React from 'react';
import { Socials } from '../constants';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#1F1B24] text-[#141F3D] dark:text-white py-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center px-4">
        <div className="flex flex-row gap-5 items-center"> 
          {Socials.map((social) => (
            <a 
              className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full p-2 duration-200" 
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
                className="filter dark:invert"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
