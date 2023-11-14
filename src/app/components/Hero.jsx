"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="md:pt-20 md:pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I'm <br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Monika
            </span>
          </h1>
          <TypeAnimation
            sequence={[
              "A full stack Web Developer",
              1000,
              "Welcome to my portfolio!",
              1000,
            ]}
            wrapper="span"
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"
            style={{ display: "inline-block" }}
            speed={50}
            repeat={0}
          />

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-400 hover:bg-slate-200 text-black">
              Contact me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-purple-400 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Check my CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 sm:mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-img3.png"
              alt="hero image"
              width={300}
              height={300}
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
