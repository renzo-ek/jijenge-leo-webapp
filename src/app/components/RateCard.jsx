import React from "react";

const RateCard = ({ title, description, rates, details }) => {
  return (
    <div className="w-full items-center max-w-xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex md:flex-row">

      {/* Right Column - Detailed Information */}
      <div className=" p-6 w-full items-center">
        {/* Price Tag Title */}
        <div className="bg-orange-400 py-2 px-4 mb-4 rounded-md w-full">
          <h2 className="text-xl font-bold text-white text-center">{title}</h2>
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
        <div className="bg-gray-50 p-4 rounded-lg w-full">
          <h3 className="font-semibold text-gray-800 mb-2">What is Included:</h3>
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