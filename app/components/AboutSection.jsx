"use client"
import React from 'react'
import { Timeline } from './TimeLine'
import Image from 'next/image';
import NewYork from '../../Images/NY.png'
import SDG from '../../Images/SDG.png'
import UOL from '../../Images/UOL.png'
import WBB from '../../Images/WBB.png'
import PT from '../../Images/PT.png'
import LA from '../../Images/LA.png'
import AI from '../../Images/AI.png'
import SE from '../../Images/SE.png'
const data = [
    {
      title: "2022",
      content: (
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 font-gotham-bold">First Experience</h2>
          <h3 className="text-lg md:text-2xl font-light mb-4 font-gotham-medium">Research Assistant at New York University</h3>
          <p className="font-gotham-light text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            As a Research Assistant at New York University, I developed an energy-sharing metaverse platform using Solidity for smart contracts and Node.js for backend integration to achieve the sustainable development goals. This project facilitated decentralized energy exchanges, supporting 500+ transactions, and enhanced my skills in blockchain development, scalability, and project management.
          </p>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <Image
             src={NewYork}
              alt="NYU Logo"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <Image
              src={SDG}
              alt="NYU Logo"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-2 font-gotham-bold">Started University</h2>
        <h3 className="text-lg md:text-2xl font-light mb-4 font-gotham-medium">Computer Science Student at the University of Leeds</h3>
        <p className="font-gotham-light text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
        At the University of Leeds, I have excelled in Computer Science, achieving a first-class average in my first year. Key modules like Object-Oriented Programming and Procedural Programming have strengthened my technical foundation, while hands-on projects, such as developing a maze-solving algorithm in C, have honed my problem-solving skills.
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <Image
           src={UOL}
            alt="NYU Logo"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image
            src={WBB}
            alt="NYU Logo"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
        </div>
      </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-2 font-gotham-bold">Breaking Ground: My First Major Experience</h2>
        <h3 className="text-lg md:text-2xl font-light mb-4 font-gotham-medium">Head Engineer at Patient Teacher</h3>
        <p className="font-gotham-light text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
        As the Full Stack Engineer for Patient Teacher, I led the development of a comprehensive learning platform, marking my first major project. This involved creating a user-friendly interface with Next.js, integrating a GPT-4o-powered chatbot, and architecting a scalable Node.js and MongoDB backend. By applying Agile methodologies, I conducted iterative development cycles to continuously improve features based on user feedback, resulting in a platform that increased user engagement by 50% during beta testing. This project not only solidified my technical expertise but also honed my ability to manage end-to-end product development, collaborate with diverse stakeholders, and deliver impactful solutions.
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <Image
           src={PT}
            alt="NYU Logo"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image
            src={LA}
            alt="NYU Logo"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
        </div>
      </div>
      ),
    },
    {
        title: "Future",
        content: (
          <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 font-gotham-bold">Vision for the Future</h2>
          <h3 className="text-lg md:text-2xl font-light mb-4 font-gotham-medium">Innovating with Purpose, Driving Impact</h3>
          <p className="font-gotham-light text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
          My future is driven by a commitment to leveraging technology to solve real-world problems. I aim to deepen my expertise in artificial intelligence, blockchain, and scalable software development, applying these skills to create impactful, user-centric solutions. Whether it’s enhancing healthcare accessibility or improving financial literacy, I aspire to contribute to projects that combine cutting-edge innovation with tangible societal benefits. By continuously learning, collaborating with diverse teams, and embracing challenges, I hope to shape a career that embodies both technical excellence and meaningful impact.
          </p>
          <div className="grid sm:grid-cols-2 grid-cols-1  gap-4">
            <Image
             src={AI}
              alt="NYU Logo"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <Image
              src={SE}
              alt="NYU Logo"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
        ),
      },
  ];

export default function AboutSection() {
  return (
    <div id='about' className=' flex flex-col w-[86%] items-center justify-start p-10  max-w-[115rem]'>
        <div className='flex flex-col w-full items-start justify-start gap-3 '>
            <p className='font-gotham-medium text-4xl md:text-6xl'>About</p>
            <p className='font-gotham-light text-lg md:text-2xl max-w-2xl'>
                From Education to internships my Journey has been exciting. Here’s a timeline of my journey
            </p>
        </div>
        <Timeline data={data}/>
    </div>
  )
}
