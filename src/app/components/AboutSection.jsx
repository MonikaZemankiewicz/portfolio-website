"use client";
import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-10">
        <li className="mb-2">
          Bachelor&apos;s and Master&apos;s Degree in Computer Science (Wroclaw
          University of Science and Technology) | 2017-2021, 2021-2023
        </li>
        <li className="mb-2">
          Erasmus Exchange in Almeria, Spain | Universidad de Almeria |
          2019-2020
        </li>
        <li className="mb-2">
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
      <ul className="list-disc pl-10">
        <li className="mb-2">
          Software Developer/Trainee | Volvo Group | 2021-2022
        </li>
        <li className="mb-2">
          Software Development Intern | 2SI | September 2020
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white lg:mt-48 flex items-center" id="about">
      <div className="mt-24 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16<">
        <Image
          alt="about image"
          src="/images/about-img.webp"
          width={500}
          height={500}
        ></Image>
        <div className="mt-12 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Computer Science Master&apos;s graduate from Wroclaw
            University of Science and Technology, with special interest in web
            development. I am passionate about creating user-friendly websites
            using the latest technologies. I like to learn continuously and keep
            up-to-date with the latest trends and best practices in the
            industry.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
