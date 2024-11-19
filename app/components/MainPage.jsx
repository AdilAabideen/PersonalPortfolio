import React from 'react'

export default function MainPage() {
  return (
    <div className="flex flex-col items-center pb-[4%] w-[80%]  justify-center sm:w-full min-h-[70%] sm:min-h-[90%] sm:gap-2 gap-0 text-center text-white">
      <p className="text-[#80D7D0] mb-2 font-gotham-narrow text-xl md:text-2xl 3xl:text-4xl">Hi, My Name Is</p>
      <h1 className="3xl:text-9xl lg:text-8xl md:text-6xl sm:text-6xl text-5xl font-gotham-bold mb-4">Adil Aabideen.</h1>
      <h2 className="3xl:text-6xl lg:text-5xl md:text-3xl text-2xl font-gotham-medium text-gray-400 mb-6">
        Driven by Curiosity, Perfected by Code
      </h2>
      <p className="text-gray-300 max-w-sm md:max-w-xl 3xl:max-w-2xl 3xl:text-3xl lg:text-2xl text-sm md:text-lg mb-8 font-gotham-medium">
        Passionate about software engineering, I draw from hands-on experience in developing impactful solutions that transform complex challenges into streamlined, meaningful applications.
      </p>
      <a href="#contact" className="font-gotham-narrow text-[#80D7D0] 3xl:text-3xl  text-lg lg:text-2xl md:text-xl border-[3px] border-[#80D7D0] px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#80D7D0] hover:text-black transition">
        Get in Touch
      </a>
    </div>
  )
}
