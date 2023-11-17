import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import ScrollingHeader from "./components/ScrollingHeader";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar></Navbar>
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero></Hero>
        {/* <hr className="mt-24 mb-12 "></hr> */}
        <AboutSection></AboutSection>
        {/* <hr className="mt-24 mb-12"></hr> */}
        <Skills></Skills>
        <div className="mb-20"></div>
        <ScrollingHeader></ScrollingHeader>
      </div>
    </main>
  );
}
