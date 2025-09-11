"use client";
import React, { useState, useRef } from "react";
import RateTag from "./RateTag";
import { motion, useInView } from "framer-motion";
import RateCard from "./RateCard";

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
      services: [{ service: "Starting at", price: "50,000", duration: "in 2 months" }],
      details: [
        "Work Out Plan",
        "Diet Plan",
        "SEO optimization",
      ]
    },
    {
      id: 2,
      title: "Silver",
      price: "10,000",
      duration: "Monthly",
      description: "Professional website for small & medium businesses",
      image: "/images/projects/2.png",
      tag: ["Tier 2"],
      services: [{ service: "Starting at", price: "100,000", duration: "in 3-6 months" }],
      details: [
        "Work Out Plan",
        "Diet Plan",
        "Gym Access",
        "2nd Tier access",
      ]
    },
    {
      id: 3,
      title: "Gold",
      price: "25,000",
      duration: "Monthly",
      description: "Professional software for large businesses",
      image: "/images/pro_software.jpg",
      tag: ["Tier 3"],
      services: [{ service: "Starting at", price: "200,000", duration: "in ~6 months" }],
      details: [
        "Diet Plan",
        "Work Out Plan",
        "Professional Guidance",
        "Gym Access",
        "Premium access to our Software",
        "Online sessions"
      ]
    }
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
        <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
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

        <div ref={ref} className="space-y-8 flex flex-col items-center">
          {filteredRates.map((rate, index) => (
            <motion.div
              key={rate.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="w-full flex justify-center"
            >
              <RateCard
                title={rate.title}
                description={rate.description}
                rates={rate.services}
                details={rate.details}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white text-lg mt-12 max-w-3xl mx-auto">
          Algorithms are seperately charged according to complexity and data.
        </p>
        <p className="text-center text-white text-lg mt-12 max-w-3xl mx-auto">
          The prices included are the starting prices for the projects. 
          They are subject to adjustments for additional features beyond the standard offering.
        </p>
      </div>
    </section>
  );
};

export default RateCardSection;