import React from 'react';
import { Socials } from '../constants'; // Importing the Socials array

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 mr-2" /> {/* Replace with your logo path */}
          <h2 className="text-lg font-semibold">Abhiroop Reddy</h2>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          {Socials.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="transition duration-150 ease-in-out hover:opacity-75">
              <img src={social.src} alt={social.name} className="h-8 w-8" />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center mt-4 text-gray-400">
        © {new Date().getFullYear()} Abhiroop Reddy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
