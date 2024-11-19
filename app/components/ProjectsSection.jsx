"use client"
import { cn } from "../lib/utils";
import { FaGithub } from "react-icons/fa";
import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import JP from '../../Images/JP.png'
import F1 from '../../Images/F1.png'
import FeaturedProject from "./FeaturedProject";

export default function ProjectsSection() {
  return (
    <div id='projects' className="w-screen flex flex-col items-center gap-6 px-4 lg:px-0 max-w-[115rem] mt-20 lg:mt-0">
      <div className='flex flex-col w-[80%] lg:w-[75%] items-start justify-start gap-6'>
        <p className='font-gotham-medium text-3xl lg:text-6xl'>Projects</p>
        <p className='font-gotham-light text-lg lg:text-2xl max-w-2xl'>
          Innovative and Impactful Projects Showcasing Technical Expertise and Delivering Real-World Solutions
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        {featuredItems.map((item, idx) => (
          <FeaturedProject
            key={idx}
            title={item.title}
            paragraph={item.paragraph}
            technologies={item.technologies}
            imagesrc={item.imagesrc}
            flip={item.flip}
            github={item.github}
            web={item.web}
          />
        ))}
      </div>
      <div className='flex flex-col w-[90%] lg:w-[75%] items-center lg:mt-20 lg:mb-12 justify-start gap-6'>
        <p className="text-3xl lg:text-5xl text-[#80D7D0] text-center font-gotham-narrow">
          Some other things I&apos;ve built
        </p>
      </div>
      <BentoGrid className="w-[85%] lg:w-[75%] mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            technologies={item.technologies}
            icon={<FaGithub />}
            image={item.image}
            item={item}
            className={i === 3 || i === 6 ? "lg:col-span-2" : ""}
            link={item.link}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "XV6 Custom Shell",
    description: "Extended the XV6 shell to include command history storage, enabling users to save and retrieve previously executed commands.",
    technologies: ['C', 'OS', 'Shell'],
    image: false,
    link: "https://github.com/AdilAabideen/xv6-custom-shell"
  },
  {
    title: "SpaceAI",
    description: "A model to classify planetary and lunar images using machine learning, built with TensorFlow and trained on space datasets.",
    technologies: ['Python', 'TensorFlow', 'Jupyter'],
    image: false,
    link: "https://github.com/AdilAabideen/SpaceAI"
  },
  {
    title: "SageMaker Summarization",
    description: "Leveraged Amazon SageMaker to build a scalable text summarization model for processing large datasets and generating concise summaries.",
    technologies: ['Python', 'AWS SageMaker', 'NLP'],
    image: false,
    link: "https://github.com/AdilAabideen/SageMaker-Summarization"
  },
  {
    title: "Paper to Code Siamese Face Verification",
    description: "Developed an advanced face verification system based on the principles of one-shot image classification using a Siamese Neural Network. The project was inspired by Gregory Koch’s seminal research paper, leveraging the TensorFlow framework to design and implement a robust model capable of accurate and efficient facial verification.",
    technologies: ['Python', 'Keras', 'OpenCV'],
    image: false,
    link: "https://github.com/AdilAabideen/FaceVerification"
  },
  {
    title: "AI Swift",
    description: "An iOS application that leverages Core ML for real-time object detection, providing on-device AI capabilities.",
    technologies: ['Swift', 'CoreML', 'Vision'],
    image: false,
    link: "https://github.com/AdilAabideen/ObjectDetectionSwift"
  },
  {
    title: "Baccarat Game in Java",
    description: "Developed a fully functional Baccarat game with a focus on object-oriented programming principles and implemented unit tests using JUnit.",
    technologies: ['Java', 'JUnit', 'Gradle'],
    image: false,
    link: "https://github.com/AdilAabideen/BaccaratGameJava"
  },
  {
    title: "AIStudent-Banking",
    description: "Designed and developed an intelligent banking analysis web application that empowers users to understand and optimize their financial habits. The application integrates advanced AI capabilities through GPT-4o to deliver personalized financial insights and dynamic data visualizations. Resulted in reduction in spending by 30%.",
    technologies: ['React', 'Flask', 'Chart.js'],
    image: false,
    link: "https://github.com/AdilAabideen/AIStudent-Banking"
  }
];

const featuredItems = [
  {
    title: "JP Morgan Report Summarizer",
    paragraph: "I developed a web app using Next.js, Flask, and GPT-4o to generate concise summaries of annual reports, reducing reading time by 65%. The app processes PDFs efficiently and delivers insights in under five seconds, streamlining financial analysis.",
    technologies: "NextJS, Langchain, Pandas, GPT-4o, Flask",
    imagesrc: JP,
    flip: false,
    github: "https://github.com/AdilAabideen/JPMorgan-Report-Summarizer",
    web: "https://jpmorganfront.vercel.app"
  },
  {
    title: "F1 Predictor",
    paragraph: "I created a machine learning pipeline using Python and scikit-learn to predict top 3 race finishes, achieving an AUC-ROC score of 0.92. The model leverages historical F1 data, driver, and constructor performance metrics for accurate predictions. The solution includes a Flask API and a dynamic Next.js frontend, deployed on AWS for scalability and real-time usability.",
    technologies: "NextJS, scikit-learn, Pandas, AWS EC2, Flask",
    imagesrc: F1,
    flip: true,
    github: "https://github.com/AdilAabideen/F1-Race-Predictor-Full-Stack",
    web: "https://f1-front-end.vercel.app/"
  },
]