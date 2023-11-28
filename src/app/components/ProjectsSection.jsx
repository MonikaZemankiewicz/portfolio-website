"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsCategoryButton from "./ProjectsCategoryButton";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Artist Portfolio Website",
    description: "Portfolio Website created for my sister. ",
    image: "/images/projects/1.png",
    gitURL: "https://github.com/MonikaZemankiewicz/ArtistPortfolio",
    previewURL: "https://zemankiewicz-art.netlify.app/",
    tags: [
      "Jamstack",
      "GatsbyJS",
      "React",
      "Contentful",
      "GraphQL",
      "Netlify",
      "Formspree",
      "Algolia",
      "Disqus",
    ],
    categories: ["All", "Web"],
  },
  {
    id: 2,
    title: "360 Media Website",
    description:
      "Website for sharing 360 images, videos and virtual tours with built in 360 image viewer. Preview not available due to the end of free hosting period. Screenshots of the website are available in the README file. ",
    image: "/images/projects/2.png",
    gitURL: "https://github.com/MonikaZemankiewicz/virtualtour-frontend",
    previewURL: "",
    tags: ["React", "Django", "360 Media", "Netlify"],
    categories: ["All", "Web"],
  },
  {
    id: 3,
    title: "Tabata Manager",
    description:
      "Android application with a tabata timer. It allows the users to create custom workouts from existing exercises, add new exercises or use ready workout plans. Existing exercises can be searched by the name or category.",
    image: "/images/projects/3.png",
    gitURL: "https://github.com/MonikaZemankiewicz/TabataManager",
    previewURL: "",
    tags: ["Android"],
    categories: ["All", "Mobile"],
  },
  {
    id: 4,
    title: "Web Development Portfolio",
    description: "This website :)",
    image: "/images/projects/4.png",
    gitURL: "https://github.com/MonikaZemankiewicz/portfolio-website",
    previewURL: "https://portfolio-website-two-henna.vercel.app/",
    tags: ["React", "NextJS", "Tailwind CSS", "Vercel"],
    categories: ["All", "Web"],
  },
  {
    id: 5,
    title: "Previous Jamstack Portfolio",
    description: "Previous portfolio version done with Jamstack and Contentful",
    image: "/images/projects/5.png",
    gitURL: "https://github.com/MonikaZemankiewicz/MojePortfolio",
    previewURL: "https://monikazemankiewicz.netlify.app/",
    tags: ["Jamstack", "React", "Contentful", "Headless CMS", "Netlify"],
    categories: ["All", "Web"],
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
    <div className="pt-24" id="projects">
      <h2 className="text-4xl text-white text-center font-bold mb-4">
        My Projects
      </h2>
      <div className="text-white flex justify-center items-center gap-2 py-6">
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
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
