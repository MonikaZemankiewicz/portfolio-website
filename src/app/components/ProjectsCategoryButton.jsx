import React from "react";

const ProjectsCategoryButton = ({ category, onClick, isSelected }) => {
  const buttonsStyles = isSelected
    ? "border-primary-400"
    : "border-slate-600 hover:border-white";
  return (
    <button
      aria-label="categories"
      className={`rounded-full border-2  px-6 py-3 text-xl cursor-pointer + ${buttonsStyles}`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};

export default ProjectsCategoryButton;
