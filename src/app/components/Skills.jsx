"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import AnimationOnScroll from "../utils/AnimationOnScroll";
import Image from "next/image";

const SKILLS_DATA = [
  {
    title: "html",
    img: "/images/html.png",
  },
  {
    title: "css",
    img: "/images/css.png",
  },
  {
    title: "react",
    img: "/images/react.png",
  },
  {
    title: "django",
    img: "/images/django.png",
  },
  {
    title: "sql",
    img: "/images/sql.png",
  },
];

const Skills = () => {
  return (
    <div className="mb-60">
      <h2 className="text-4xl text-center font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Skills
        </span>
      </h2>
      <main className="flex flex-wrap justify-center space-x-4 mt-8">
        <AnimationOnScroll
          classNameInView={"isInView flex flex-wrap justify-center"}
          classNameNotInView={"isNotInView flex flex-wrap justify-center"}
        >
          {SKILLS_DATA.map((skill, index) => {
            return (
              <div
                key={index}
                className="skill_card rounded-lg shadow-lg text-2xl h-auto overflow-hidden mt-4 mr-4 relative"
              >
                <Image
                  src={skill.img}
                  alt={skill.title + "logo"}
                  width={70}
                  height={70}
                  className="skill_logo relative z-2 self-start m-3"
                />
              </div>
            );
          })}
        </AnimationOnScroll>
      </main>
    </div>
  );
};

export default Skills;
