"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsCategoryButton from "./ProjectsCategoryButton";
import { useState, useEffect } from "react";

const projectsData = [
  {
    id: 1,
    title: "Artist Portfolio Website",
    description: "Portfolio Website created for my sister. ",
    image: "/images/projects/1.png",
    gitURL: "https://github.com/MonikaZemankiewicz/ArtistPortfolio",
    previewURL: "https://zemankiewicz-art.netlify.app/",
    tags: ["Jamstack", "React", "Contentful", "Netlify"],
    categories: ["React", "NextJS"],
  },
  {
    id: 2,
    title: "360 Media Website",
    description:
      "Website for sharing 360 images, videos and virtual tours with built in 360 image viewer. Preview not available due to the end of free hosting period. Screenshots of the website are available in the README file. ",
    image: "/images/projects/2.png",
    gitURL: "",
    previewURL: "",
    tags: ["React", "Django", "360 Media", "Netlify"],
    categories: ["React", "Web"],
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "React Portfolio Website description",
    image: "/images/projects/1.png",
    gitURL: "",
    previewURL: "",
    tags: ["React", "Django", "360 Media", "Netlify"],
    categories: ["React", "NextJS"],
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "React Portfolio Website description",
    image: "/images/projects/1.png",
    gitURL: "",
    previewURL: "",
    tags: ["React", "Django", "360 Media", "Netlify"],
    categories: ["React", "NextJS"],
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "React Portfolio Website description",
    image: "/images/projects/1.png",
    gitURL: "",
    previewURL: "",
    tags: ["React", "Django", "360 Media", "Netlify"],
    categories: ["React", "NextJS"],
  },
];

const ProjectsSection = () => {
  const [category, setCategory] = useState("All");
  const handleTagChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.categories.includes(category)
  );

  return (
    <>
      <h2 className="text-4xl text-white text-center font-bold mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectsCategoryButton
          onClick={handleTagChange}
          category="All"
          isSelected={category === "All"}
        ></ProjectsCategoryButton>
        <ProjectsCategoryButton
          onClick={handleTagChange}
          category="Web"
          isSelected={category === "Web"}
        ></ProjectsCategoryButton>
        <ProjectsCategoryButton
          onClick={handleTagChange}
          category="Mobile"
          isSelected={category === "Mobile"}
        ></ProjectsCategoryButton>
        <ProjectsCategoryButton
          onClick={handleTagChange}
          category="React"
          isSelected={category === "React"}
        ></ProjectsCategoryButton>
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
