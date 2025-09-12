"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const programsData = [
  {
    id: 1,
    title: "Full Body",
    description: "Cardio and Strength Training",
    image: "/images/programs/plank.jpg",
    tag: ["All", "Fitness"],
    gitUrl: "/",
    previewUrl: "https://www.acmekenya.org/",
  },
  {
    id: 2,
    title: "Upper Body",
    description: "From Arms to Chest",
    image: "/images/programs/crunch.jpg",
    tag: ["All", "Fitness"],
    gitUrl: "/",
    previewUrl: "https://edge-d.vercel.app/",
  },
  {
    id: 3,
    title: "Lower Body",
    description: "Froms Abs to Glutes",
    image: "/images/programs/lower_body.jpg",
    tag: ["All", "Fitness"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Physique Maintenance",
    description: "Maintaining your body",
    image: "/images/programs/body_diet.jpg",
    tag: ["All", "Diet"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Bulking",
    description: "Weight Gain Program",
    image: "/images/programs/gym_gear.jpg",
    tag: ["All", "Diet"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Health Enhancement",
    description: "Vitamin, Diet and Supplements",
    image: "/images/programs/diet_1.jpg",
    tag: ["All", "Diet"],
    gitUrl: "https://github.com/Imoite-zn/BidMartZ",
    previewUrl: "https://github.com/Imoite-zn/BidMartZ",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = programsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 font-mono">
        Our Programs
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Fitness"
          isSelected={tag === "Fitness"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Diet"
          isSelected={tag === "Diet"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
