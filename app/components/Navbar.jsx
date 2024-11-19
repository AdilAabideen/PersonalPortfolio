"use client"
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-9 px-10 w-full">
      <div>
        <h1 className="text-white font-bold text-4xl font-gotham-bold">Adil.dev</h1>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} absolute lg:static top-0 right-0 bg-black lg:bg-transparent w-full lg:w-auto h-screen lg:h-auto`}>
        <div className="flex justify-between p-4 lg:hidden">
            <div className='pl-6 pt-5'>
                <h1 className="text-white font-bold text-4xl font-gotham-bold">Adil.dev</h1>
            </div>
          <button onClick={toggleMenu} className="text-white focus:outline-none mr-6 mt-1">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
        </div>
        <ul className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 font-gotham-medium p-10 lg:p-0">
          
          <li><a href="#about" className="text-white text-lg hover:bg-white hover:text-black px-5 py-2 rounded">ABOUT</a></li>
          <li><a href="#experience" className="text-white text-lg hover:bg-white hover:text-black px-5 py-2 rounded">EXPERIENCE</a></li>
          <li><a href="#projects" className="text-white text-lg hover:bg-white hover:text-black px-5 py-2 rounded">PROJECTS</a></li>
          <li><a href="#contact" className="text-white text-lg border-[3px] border-white px-5 py-2 hover:bg-white hover:text-black rounded-xl">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}
