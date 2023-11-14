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
    <div>
      <h2 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 mb-4">
        Skills
      </h2>
      <main className="flex flex-wrap justify-center space-x-4 mt-8">
        <AnimationOnScroll
          classNameInView={
            "isInView flex flex-wrap justify-center space-x-4 mt-8"
          }
          classNameNotInView={
            "isNotInView flex flex-wrap justify-center space-x-4 mt-8"
          }
        >
          {SKILLS_DATA.map((skill, index) => {
            return (
              <div key={index} className="skill_card">
                <Image
                  src={skill.img}
                  alt={skill.title + "logo"}
                  width={70}
                  height={70}
                  className="skill_logo"
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
