import React from "react";

const ProjectsTag = ({ tag, onClick, isSelected }) => {
  const buttonsStyles = isSelected
    ? "border-purple-500"
    : "border-slate-600 hover:border-white";
  return (
    <button
      className={`rounded-full border-2  px-6 py-3 text-xl cursor-pointer + ${buttonsStyles}`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default ProjectsTag;
