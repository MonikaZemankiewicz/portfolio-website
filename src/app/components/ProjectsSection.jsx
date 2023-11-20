"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsTag from "./ProjectsTag";
import { useState, useEffect } from "react";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "React Portfolio Website description",
    image: "/images/projects/1.png",
    gitURL: "https://github.com/MonikaZemankiewicz/ArtistPortfolio",
    previewURL: "https://zemankiewicz-art.netlify.app/",
    tags: ["React", "NextJS"],
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "React Portfolio Website description",
    image: "/images/projects/1.png",
    gitURL: "",
    previewURL: "",
    tags: ["React", "Web"],
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "React Portfolio Website description",
    image: "/images/projects/1.png",
    gitURL: "",
    previewURL: "",
    tags: ["React", "NextJS"],
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "React Portfolio Website description",
    image: "/images/projects/1.png",
    gitURL: "",
    previewURL: "",
    tags: ["React", "NextJS"],
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "React Portfolio Website description",
    image: "/images/projects/1.png",
    gitURL: "",
    previewURL: "",
    tags: ["React", "NextJS"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag)
  );

  return (
    <>
      <h2 className="text-4xl text-white text-center font-bold mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectsTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        ></ProjectsTag>
        <ProjectsTag
          onClick={handleTagChange}
          tag="Web"
          isSelected={tag === "Web"}
        ></ProjectsTag>
        <ProjectsTag
          onClick={handleTagChange}
          tag="Mobile"
          isSelected={tag === "Mobile"}
        ></ProjectsTag>
        <ProjectsTag
          onClick={handleTagChange}
          tag="React"
          isSelected={tag === "React"}
        ></ProjectsTag>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project}></ProjectCard>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
