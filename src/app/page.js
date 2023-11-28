import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import ScrollingHeader from "./components/ScrollingHeader";
import LavaLamp from "./components/LavaLamp";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar></Navbar>
      <LavaLamp></LavaLamp>
      <div className="container relative z-2 mt-24 mx-auto px-12 py-4">
        <Hero></Hero>
        <AboutSection></AboutSection>
        <Skills></Skills>
        <ProjectsSection></ProjectsSection>
        <ContactSection></ContactSection>
      </div>
      <Footer></Footer>
    </main>
  );
}
