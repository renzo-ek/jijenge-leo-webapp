import React from "react";

const RateCard = ({ 
  title, 
  description, 
  rates, 
  details, 
  titleBgColor = "bg-orange-400", 
  titleTextColor = "text-white" 
}) => {
  return (
    <div className="w-full items-center max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 overflow-hidden border border-gray-200 dark:border-gray-700 flex md:flex-row transition-colors duration-300">
      {/* Detailed Information */}
      <div className="p-6 w-full items-center">
        {/* Price Tag Title - Now with customizable colors */}
        <div className={`py-2 px-4 mb-4 rounded-md w-full ${titleBgColor}`}>
          <h2 className={`text-xl font-bold text-center font-mono ${titleTextColor}`}>
            {title}
          </h2>
        </div>

        {/* Main Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

        {/* Rates Section */}
        <div className="mb-4">
          {rates.map((rate, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-600">
              <span className="font-medium text-gray-800 dark:text-gray-200">{rate.service}</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">
                KES {rate.price}
                {rate.duration && <span className="text-gray-500 dark:text-gray-400 text-sm font-normal">/{rate.duration}</span>}
              </span>
            </div>
          ))}
        </div>

        {/* Details Container */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg w-full">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">What is Included:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
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