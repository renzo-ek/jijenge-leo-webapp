import React from "react";

const RateTag = ({ name, onClick, isSelected }) => {

const buttonStyles = isSelected
  ? "text-white bg-sky-400"
  : "text-[#ADB7BE] bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 hover:from-white hover:via-gray-200 hover:to-white";

return (
  <button
    className={`${buttonStyles} border-2 border-transparent bg-clip-padding rounded-none px-6 py-3 text-xl cursor-pointer transform -skew-x-12 mx-2 relative`}
    onClick={() => onClick(name)}
  >
    {/* Gradient border effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-red-300  via-purple-500 to-stone-700 -z-10 rounded-none transform -skew-x-12 mx-[-2px] my-[-2px]" />
    <span className="transform skew-x-12 block">
      {name}
    </span>
  </button>

// const RateTag = ({ name, onClick, isSelected }) => {
//   const buttonStyles = isSelected
//   ? "text-white border-primary-500"
//   : "text-[#ADB7BE] border-slate-600 hover:border-white";

// return (
//   <button
//     className={`${buttonStyles} border-2 px-6 py-3 text-xl cursor-pointer transform -skew-x-12 mx-2`}
//     onClick={() => onClick(name)}
//   >
//     <span className="transform skew-x-12 block">
//       {name}
//     </span>
//   </button>
  // const buttonStyles = isSelected
  //   ? "text-white border-primary-500"
  //   : "text-[#ADB7BE] border-slate-600 hover:border-white";
  // return (
  //   <button
  //     className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
  //     onClick={() => onClick(name)}
  //   >
  //     {name}
  //   </button>
  );
}

export default RateTag;
