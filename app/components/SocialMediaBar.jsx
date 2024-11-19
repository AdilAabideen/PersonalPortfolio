// personalportfolio/app/components/SocialMediaBar.jsx
import React from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaCodepen } from 'react-icons/fa';

export default function SocialMediaBar() {
  return (
    <div className="fixed hidden -left-6 bottom-0 xl:flex flex-col items-center space-y-4 text-[#80D7D0]">
        <p 
        className=" -rotate-90 mb-20  text-sm  font-gotham-light"
        >aaabideen08@gmail.com</p>
      <a href="https://github.com/AdilAabideen" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      
      <a href="https://www.linkedin.com/in/adil-aabideen" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      
      <div className="w-px h-24 bg-[#80D7D0] mt-4"></div>
    </div>
  );
}