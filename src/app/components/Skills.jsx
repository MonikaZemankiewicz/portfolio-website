"use client";
import React from "react";
import AnimationOnScroll from "../utils/AnimationOnScroll";
import Image from "next/image";

const SKILLS_DATA = [
  {
    title: "html",
    img: "/images/html.webp",
  },
  {
    title: "css",
    img: "/images/css.webp",
  },
  {
    title: "js",
    img: "/images/js.webp",
  },
  {
    title: "python",
    img: "/images/python.png",
  },
  {
    title: "react",
    img: "/images/react.png",
  },
  {
    title: "django",
    img: "/images/django.webp",
  },
  {
    title: "sql",
    img: "/images/sql.png",
  },
];

const Skills = () => {
  return (
    <div className="mt-28 mb-20 md:mt-44 md:mb-48">
      <h2 className=" text-center text-4xl font-bold text-white mb-4">
        Skills
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
