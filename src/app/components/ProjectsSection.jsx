"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ecommerces Food Application",
    description: "Crave Point is a responsive food-focused e-commerce website built with a ReactJS frontend and Firebase databae. It includes essential features like user authentication (Login), a dynamic Cart, and a fully integrated ordering system. Access to the Cart and ordering functions is restricted to authenticated users, ensuring both security and a personalized shopping experience.",
    image: "/images/ecommerceimg.jpg",
    tag: ["All", "ReactJs"],
    gitUrl: "https://github.com/Ah815/web_engineering_project",
    previewUrl: "https://web-engineering-project-hazel.vercel.app/",
  },
  {
    id: 2,
    title: "Marketing Website",
    description: "YVOG is a responsive marketing website built with ReactJS and styled using Tailwind CSS. The platform allows users to easily book a consultant directly from the site, offering expert guidance on scaling their own platforms through targeted marketing strategies such as Social Media Marketing(SSM), Pay Per Click Advertising (PPC), Search Engine Optimization (SEO), and more.",
    image: "/images/marketingimg.jpg",
    tag: ["All", "ReactJs"],
    gitUrl: "https://github.com/Ah815/Positivus-Digital-Marketing",
    previewUrl: "https://positivus-digital-marketing.vercel.app/",
  },
  {
    id: 3,
    title: "Blog Application",
    description: "MetaBolg is a responsive blog platform designed for reading and sharing content, built with a Next.js frontend and styled using Tailwind CSS. The backend is powered by Next.js, Prisma, and MongoDB as the database. It includes a secure login feature implemented with NextAuth, allowing users to contribute their own blogs under categories like Sports, Technology, Travel, and Business.",
    image: "/images/blogimg.jpg",
    tag: ["All", "NextJs"],
    gitUrl: "https://github.com/Ah815/Blog_App",
    previewUrl: "https://blog-app-pearl-kappa.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ReactJs"
          isSelected={tag === "ReactJs"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NextJs"
          isSelected={tag === "NextJs"}
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
