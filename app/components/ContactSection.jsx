import React from 'react'

export default function ContactSection() {
  return (
    <div id="contact" className="flex flex-col items-center justify-center text-center w-full min-h-[80vh] text-white py-20 px-4">
      <p className="text-[#80D7D0] mb-2 text-2xl md:text-3xl lg:text-5xl font-gotham-narrow">What To Do Next?</p>
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-gotham-bold  lg:mb-2">Get In Touch</h2>
      <p className="text-base md:text-xl lg:text-2xl text-neutral-400 my-8 font-gotham-medium mb-8 max-w-[70%] lg:max-w-xl">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a href="https://www.linkedin.com/in/adil-aabideen" target='_blank' className="font-gotham-narrow text-[#80D7D0] text-xl md:text-2xl lg:text-4xl border-[3px] border-[#80D7D0] px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#80D7D0] hover:text-black transition">
        Get in Touch
      </a>
    </div>
  )
}
