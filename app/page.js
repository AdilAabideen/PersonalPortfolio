"use client"
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SocialMediaBar from "./components/SocialMediaBar";

export default function Home() {
  return (
    <div className="flex relative min-w-full flex-col items-center h-full no-scrollbar overflow-auto scroll-smooth">
      <Navbar />
      <MainPage />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <SocialMediaBar />
    </div>
  )
}
