"use client"
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function FeaturedProject({ title, paragraph, technologies, imagesrc, flip, github, web }) {
  return (
    <div className={`flex flex-col xl:flex-row ${flip ? 'xl:flex-row-reverse' : ''} text-white p-8 w-full sm:w-[90%] xl:w-[75%] gap-6`}>
      <div className="relative w-full xl:w-3/5 group">
        {/* Image Section */}
        <Image src={imagesrc} alt="Project" className="w-full h-auto rounded-xl" />

        {/* Tint Overlay */}
        <div className="absolute inset-0 bg-[#80D7D0]/30 rounded-xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
      </div>
      <div className="w-full xl:w-2/5 flex flex-col justify-center">
        <p className="text-[#80D7D0] font-gotham-narrow text-xl xl:text-2xl mb-2">Featured Project</p>
        <h2 className="text-3xl xl:text-4xl mb-4 font-gotham-bold">{title}</h2>
        <div className="rounded mb-4 font-gotham-light">
          <p className="text-base xl:text-xl">
            {paragraph}
          </p>
        </div>
        <p className="mb-4 text-[#80D7D0] font-gotham-medium text-xl xl:text-xl">{technologies}</p>
        <div className="flex space-x-4">
          <a href={github} target="_blank" className="text-white">
            <FaGithub size={24} />
          </a>
          <a href={web} target="_blank" className="text-white">
            <FaExternalLinkAlt size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}