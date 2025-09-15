import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-amber-500 dark:bg-primary-500 border-amber-500 dark:border-primary-500"
    : "text-gray-700 dark:text-[#ADB7BE] border-gray-300 dark:border-slate-600 hover:border-amber-500 dark:hover:border-white hover:text-gray-900 dark:hover:text-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer font-mono transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;