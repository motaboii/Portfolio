import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  source: string;
  live?: string; // optional
}

const ProjectCard = ({ title, description, tech, image, source, live }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="
        rounded-xl overflow-hidden 
        bg-white/60 backdrop-blur-md 
        border border-black/10 shadow-sm 
        hover:shadow-md transition-all
      "
    >
      {/* Project Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-black/5 rounded-md text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Source Code button */}
          <a
            href={source}
            target="_blank"
            className="
              text-sm px-3 py-1.5 rounded-md 
              bg-black text-white 
              hover:bg-black/80 transition
            "
          >
            Code
          </a>

          {/* Live button only if provided */}
          {live && (
            <a
              href={live}
              target="_blank"
              className="
                text-sm px-3 py-1.5 rounded-md 
                bg-gray-100 text-gray-800 
                hover:bg-gray-200 transition
              "
            >
              Live
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
