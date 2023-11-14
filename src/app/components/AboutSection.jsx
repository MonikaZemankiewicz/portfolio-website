"use client";
import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>GatsbyJS</li>
        <li>Python</li>
        <li>Django</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Master's Degree in Computer Science | Wroclaw University of Science
          and Technology | 2021-2023
        </li>
        <li>
          Bachelor's Degree in Computer Science | Wroclaw University of Science
          and Technology | 2017-2020
        </li>
        <li>
          Erasmus Exchange in Almeria, Spain | Universidad de Almeria |
          2019-2020
        </li>
        <li>
          Erasmus Exchange in Porto, Portugal | Instituto Politecnico do Porto |
          2022-2023
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Developer/Trainee | Volvo Group | 2021-2022</li>
        <li>Software Development Intern | 2SI | September 2020 </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16<">
        <Image
          alt="about image"
          src="/images/about-img.png"
          width={500}
          height={500}
        ></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Incididunt occaecat consectetur dolore consectetur sint labore magna
            anim do in. Aliquip culpa eu sint ut eu eiusmod eu ullamco aliquip
            occaecat esse esse sit culpa. Laborum cupidatat est sint et.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
