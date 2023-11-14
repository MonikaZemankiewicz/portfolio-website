"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import AnimationOnScroll from "../utils/AnimationOnScroll";

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
          <div className="skill_logo">Skill 1</div>
          <div className="skill_logo">Skill 2</div>
          <div className="skill_logo">Skill 3</div>
          <div className="skill_logo">Skill 4</div>
        </AnimationOnScroll>
      </main>
    </div>
  );
};

export default Skills;
