"use client";

import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"; 
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    if (!isHovered) {
      setTimeout(() => setIsOpen(false), 200);
    }
  };

  const handleDropdownHover = (isHovering: boolean) => {
    setIsHovered(isHovering);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        onMouseLeave={handleMouseLeave}
        className="p-2 text-2xl text-gray-700 dark:text-white hover:text-[#FCA317] focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg dark:bg-gray-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onMouseEnter={() => handleDropdownHover(true)}
            onMouseLeave={() => {
              handleDropdownHover(false);
              handleMouseLeave();
            }}
          >
            <div className="absolute -top-2 -right-2 w-12 h-12" />
            <ul className="flex p-4 space-x-4"> {/* Changed to flex for inline display */}
              <li>
                <a href="/" className="block text-gray-800 dark:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-me" className="block text-gray-800 dark:text-white">
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="/my-projects"
                  className="block text-gray-800 dark:text-white"
                >
                  Projects
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
