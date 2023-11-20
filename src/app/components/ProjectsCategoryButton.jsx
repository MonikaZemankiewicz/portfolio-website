import React from "react";

const ProjectsCategoryButton = ({ category, onClick, isSelected }) => {
  const buttonsStyles = isSelected
    ? "border-purple-500"
    : "border-slate-600 hover:border-white";
  return (
    <button
      className={`rounded-full border-2  px-6 py-3 text-xl cursor-pointer + ${buttonsStyles}`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};

export default ProjectsCategoryButton;
