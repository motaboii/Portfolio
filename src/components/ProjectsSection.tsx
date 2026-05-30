import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CareerCove Job Portal",
      description:
        "A job portal with authentication, role-based dashboards, and an application tracking system.",
      tech: ["React", "Node.js", "MySQL", "Tailwind"],
      image: "/projects/photo.jpg",
      source: "https://github.com/yourrepo",
      live: "https://your-live-url.com"
    },
    {
      title: "LearningDhara Platform",
      description:
        "Ed-tech learning platform built using Next.js, TypeScript, and NestJS.",
      tech: ["Next.js", "TypeScript", "Prisma"],
      image: "/projects/photo.jpg",
      source: "https://github.com/yourrepo"
    },
    {
      title: "AutoJoomer College App",
      description:
        "Utility mobile app with timetables, notifications, and event updates.",
      tech: ["React Native", "Node.js"],
      image: "/projects/photo.jpg",
      source: "https://github.com/yourrepo",
      live: "https://your-live.com"
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-8 py-20">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
