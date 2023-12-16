import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  gitURL,
  previewURL,
  tags,
}) => {
  return (
    <div className="flex flex-col">
      <div
        className="h-52 xl:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center gap-6 justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitURL && (
            <Link
              href={gitURL}
              rel="noopener noreferrer"
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {previewURL && (
            <Link
              href={previewURL}
              rel="noopener noreferrer"
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="grow text-white rounded-b-xl bg-[#181818] py-6 px-4 flex flex-col">
        <div className="sm:hidden flex flex-row gap-3 justify-left mb-3">
          {gitURL && (
            <a
              href={gitURL}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="github link"
            >
              <FaGithub />
            </a>
          )}
          {previewURL && (
            <a
              href={previewURL}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="preview link"
            >
              <FaGlobe />
            </a>
          )}
        </div>
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-6">{description}</p>
        <div className="mt-auto flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-md mt-2 px-3 py-1.5 text-sm text-[#f4f3f3b1] bg-[#cecccc1b] mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
