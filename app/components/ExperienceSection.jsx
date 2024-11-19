"use client"
import React, { useState } from 'react';

export default function ExperienceSection() {
  const [activeCompany, setActiveCompany] = useState('NewYorkUniversity');

  const experiences = {
    NewYorkUniversity: {
        mt: "New York University",
        title: 'Research Assistant @ New York University',
        date: 'July 2022 — August 2022',
        details: [
            'Developed an energy-sharing metaverse platform using React, facilitating real-time collaboration on decentralized energy exchanges.',
            'Deployed smart contracts in Solidity, enabling secure, fast transactions for over 500 energy-sharing interactions.',
            'Engineered a Node.js backend to handle user interactions and transaction data, scaling successfully for concurrent users.',
            'Implemented the Waterfall methodology to plan and execute each project phase, ensuring clear communication and high-quality delivery.',
        ],
    },
    PatientTeacher: {
        mt: "Patient Teacher",
        title: 'Full Stack Engineer (Head Developer) @ Patient Teacher',
        date: 'June 2024 — October 2024',
        details: [
            'Led the design and development of a full-stack web application featuring 100+ medical articles and a learning platform for 500+ users.',
            'Integrated an AI-powered chatbot using GPT-4o to assist users, increasing engagement by 50% post-beta testing.',
            'Built a scalable backend with Node.js and MongoDB, incorporating Azure Blob for large media storage and Lucia for secure user authentication.',
            'Applied Agile methodologies, delivering a scalable MVP through iterative development cycles and stakeholder feedback.',
        ],
    },
    MHATTechnologies: {
        mt: "MHAT Technologies",
        title: 'Backend Development Intern @ MHAT Technologies',
        date: 'May 2024 — June 2024',
        details: [
            'Developed database schemas and workflows for a Laravel and PHP-based application with 1000+ verified doctors.',
            'Reduced database schema size by 40% through optimization, improving efficiency and performance.',
            'Reviewed and understood large-scale codebases, enhancing skills in analyzing and navigating complex systems.',
            'Collaborated with a team of 15, applying version control and project management best practices to deliver scalable solutions.',
        ],
    },
    
    // Add more companies as needed
  };

  return (
    <div id="experience" className='min-h-screen flex flex-col items-center justify-center gap-8 w-full max-w-[115rem]'>
      <div className='flex flex-col w-[90%]  lg:w-[70%] items-center lg:items-start justify-start gap-3'>
        <p className='font-gotham-medium text-4xl lg:text-6xl'>Experiences</p>
        <p className='font-gotham-light text-lg lg:text-2xl max-w-2xl text-center lg:text-left'>
          Building impactful solutions and gaining hands-on expertise through diverse, industry-focused internships.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row text-white p-8 w-full lg:w-auto items-center lg:items-start">
        <div className="mb-6 lg:mr-12 lg:pr-8 text-center lg:text-left">
          {Object.keys(experiences).map((company) => (
            <p
              key={company}
              className={`mb-4 lg:mb-6 cursor-pointer text-xl lg:text-2xl font-gotham-narrow ${activeCompany === company ? 'text-[#80D7D0]' : ''}`}
              onClick={() => setActiveCompany(company)}
            >
              {experiences[company].mt}
            </p>
          ))}
        </div>
        <div className="max-w-xl">
          <h2 className="text-2xl lg:text-4xl font-gotham-bold mb-2">
            {experiences[activeCompany].title}
          </h2>
          <p className="mb-4 lg:mb-6 font-gotham-medium text-lg lg:text-2xl">{experiences[activeCompany].date}</p>
          <ul className="list-none pl-0">
            {experiences[activeCompany].details.map((detail, index) => (
              <li key={index} className="mb-2 lg:mb-4 text-base lg:text-xl font-gotham-light relative pl-10">
                <span className="absolute left-0 text-teal-400">➤</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
