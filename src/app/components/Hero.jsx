"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="md:pt-20 h-[calc(100vh-100px)]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I&apos;m <br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-600">
              Monika
            </span>
          </h1>
          <TypeAnimation
            sequence={[
              "A full stack Web Developer",
              1000,
              "Welcome to my portfolio!",
              5000,
            ]}
            wrapper="span"
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"
            style={{ display: "inline-block" }}
            speed={50}
            repeat={Infinity}
          />

          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 to-primary-400 hover:bg-slate-200 text-black"
            >
              Contact me
            </Link>
            <Link
              href="https://www.canva.com/design/DAF1aVA4wX8/X8H85iPB1ZCOIWXQFXIeVw/view?utm_content=DAF1aVA4wX8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              rel="noopener noreferrer"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary-500 to-primary-400 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Check my CV
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 sm:mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818d5] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-img3.webp"
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
