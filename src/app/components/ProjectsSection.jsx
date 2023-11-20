import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "React Portfolio Website description",
    image: "/images/projects/1.png",
    tags: ["React", "NextJS"],
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "React Portfolio Website description",
    image: "/images/projects/1.png",
    tags: ["React", "NextJS"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-4xl text-white text-center font-bold mb-4">
        My Projects
      </h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project}></ProjectCard>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
