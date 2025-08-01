import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const RateCard = ({ imgUrl, title, description, rates, details }) => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col md:flex-row">
      {/* Left Column - Image and Basic Info */}
      <div className="md:w-1/2 relative group">
        <div
          className="h-64 md:h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          {/* <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] mx-2 cursor-pointer group-hover/link:text-white" />
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] mx-2 cursor-pointer group-hover/link:text-white" />
          </div> */}
        </div>
      </div>

      {/* Right Column - Detailed Information */}
      <div className="md:w-1/2 p-6 flex flex-col">
        {/* Price Tag Title */}
        <div className="bg-blue-600 py-2 px-4 mb-4 rounded-md">
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>

        {/* Main Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Rates Section */}
        <div className="mb-4">
          {rates.map((rate, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-800">{rate.service}</span>
              <span className="font-bold text-blue-600">
                KES {rate.price}
                {rate.duration && <span className="text-gray-500 text-sm font-normal">/{rate.duration}</span>}
              </span>
            </div>
          ))}
        </div>

        {/* Details Container */}
        <div className="bg-gray-50 p-4 rounded-lg flex-grow">
          <h3 className="font-semibold text-gray-800 mb-2">What's Included:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RateCard;