export type Project = {
    id: string;
    title:string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
    image: string;
};

export const projects: Project[] = [
    {
        id: "blocksure",
        title: "BlockSure",
        description: "A decentralized insurance platform leveraging blockchain technology to provide transparent and efficient insurance services.",
        tech: ["React.js", "MongoDB", "Node.js", "Ethereum", "Solidity"],
        github: "#",
        live: "#",
        image: "/projects/photo.jpg",
    },
    {
        id: "careercove",
        title: "CareerCove",
        tech: ["React", "Express", "MySQL", "Prisma"],
        description: "A job portal with filtering, search and company dashboards.",
        github: "#",
        live: "#",
        image: "/projects/photo.jpg"
  },
  {
        id: "autojoomer",
        title: "AutoJoomer",
        description: "College utility app with timetables, notifications and local services.",
        tech: ["React", "Firebase"],
        github: "#",
        live: "#",
        image: "/projects/photo.jpg"
  },
  {
        id: "portfolio-v1",
        title: "Portfolio V1",
        description: "My first portfolio site built to showcase projects and blogs.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "#",
        image: "/projects/photo.jpg"
  }
];
