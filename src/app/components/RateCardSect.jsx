"use client";
import React, { useState, useRef } from "react";
import RateTag from "./RateTag";
import { motion, useInView } from "framer-motion";
import RateCard from "./RateCard";
import { FaAppStoreIos } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa6";


const RateCardSection = () => {
  const [tag, setTag] = useState("Tier 1");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const ratesData = [
    {
      id: 1,
      title: "Bronze",
      price: "5,000",
      duration: "Monthly",
      description: "Simple Blog Pages & Portfolio Websites (hosting excluded)",
      image: "/images/projects/1.png",
      tag: ["Tier 1"],
      services: [{ service: "Starting at", price: "5,000", duration: "monthly" }],
      details: [
        "Work Out Plan",
        "Diet Plan",
        "SEO optimization",
      ],
      titleBgColor: "bg-amber-600", // Bronze color
      titleTextColor: "text-white"
    },
    {
      id: 2,
      title: "Silver",
      price: "10,000",
      duration: "Monthly",
      description: "Professional website for small & medium businesses",
      image: "/images/projects/2.png",
      tag: ["Tier 2"],
      services: [{ service: "Starting at", price: "10,000", duration: "monthly" }],
      details: [
        "Work Out Plan",
        "Diet Plan",
        "Gym Access",
        "2nd Tier access",
      ],
      titleBgColor: "bg-gray-400", // Silver color
      titleTextColor: "text-gray-900"
    },
    {
      id: 3,
      title: "Gold",
      price: "25,000",
      duration: "Monthly",
      description: "Professional software for large businesses",
      image: "/images/pro_software.jpg",
      tag: ["Tier 3"],
      services: [{ service: "Starting at", price: "25,000", duration: "monthly" }],
      details: [
        "Diet Plan",
        "Work Out Plan",
        "Professional Guidance",
        "Gym Access",
        "Premium access to our Software",
        "Online sessions"
      ],
      titleBgColor: "bg-yellow-500", // Gold color
      titleTextColor: "text-gray-900"
    },
    // Tier four to come with the app launch
    // {
    //   id: 4,
    //   title: "Platinum",
    //   price: "40,000",
    //   duration: "Monthly",
    //   description: "Enterprise-grade solutions with premium support",
    //   image: "/images/pro_software.jpg",
    //   tag: ["Tier 3"],
    //   services: [{ service: "Starting at", price: "40,000", duration: "monthly" }],
    //   details: [
    //     "All Gold features",
    //     "24/7 dedicated support",
    //     "Custom integrations",
    //     "Priority feature requests",
    //     "Advanced analytics"
    //   ],
    //   titleBgColor: "bg-blue-400", // Platinum color
    //   titleTextColor: "text-white"
    // }
    // Add other tiers similarly...
  ];

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredRates = ratesData.filter((rate) => rate.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="rates" className="py-12 bg-[#181818] min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12 font-mono">
          Our Rates
        </h2>
        
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          {["Tier 1", "Tier 2", "Tier 3"].map((tier) => (
            <RateTag
              key={tier}
              onClick={() => handleTagChange(tier)}
              name={tier}
              isSelected={tag === tier}
            />
          ))}
        </div>

        <div ref={ref} className="my-9 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRates.map((rate, index) => (
            <motion.div
              key={rate.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <RateCard
                title={rate.title}
                description={rate.description}
                rates={rate.services}
                details={rate.details}
                titleBgColor={rate.titleBgColor}
                titleTextColor={rate.titleTextColor}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white text-lg mt-12 max-w-3xl mx-auto">
          We are working on a crossplatform app to be fit with you anywhere you wish to work out!
        </p>
        <p className="text-center text-white text-lg mt-12 max-w-3xl mx-auto">
          The app is still in construction 🛠️. 
          Coming soon to your favorite app stores.
        </p>
        <div className="items-center justify-center flex mt-10">
          <FaAppStoreIos size={60} className="mx-4 text-sky-400"/>
          <FaAndroid size={60} className="mx-4 text-lime-500"/>
        </div>
      </div>
    </section>
  );
};

export default RateCardSection;