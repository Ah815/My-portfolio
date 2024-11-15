"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Python</li>
        <li>Java</li>
      </ul>
    ),
  },
 
  {
    title: "Frontend",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJS</li>
        <li>Next.js</li>
        <li>React Native</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Backend",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
         <li>Node</li>
         <li>Express</li> 
        <li>MongoDB</li>
        <li>Firebase</li> 
      </ul>
    ),
  },
  {
    title: "Library",
    id: "library",
    content: (
      <ul className="list-disc pl-2">
        <li>Material UI</li>
        <li>Ant Desing</li>
        <li>Shadcn UI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelors in Software Engineering;
          Sir Syed University of Engineering and Technology, Karachi, Pakistan
        </li>
      </ul>
    ),
  },
  {
    title: "Courses",
    id: "courses",
    content: (
      <ul className="list-disc pl-2">
        <li>MERN Stack</li>
        <li>React Native</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages"); // Changed default tab to "languages"
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="A description of the about section image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-md">
            I'm a Full Stack Software Engineer with a focus on creating
            responsive, interactive, and scalable web applications. With
            expertise in JavaScript, Python, and Java, I am skilled in both
            frontend and backend development. My frontend stack includes
            ReactJS, Next.js, React Native, Tailwind CSS, Material UI, Ant
            Design, and Shadcn UI. On the backend, I work with Node.js,
            Express.js, Next.js, MongoDB, and Firebase to deliver robust
            solutions. Proficient in Git for version control, I'm a fast learner
            with a passion for technology and problem-solving. I thrive in
            collaborative environments and am excited to contribute to projects
            that push the boundaries of web development.
          </p>
          <div className="flex flex-row justify-start mt-8 text-lg">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              Languages
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              Frontend
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              Backend
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("library")}
              active={tab === "library"}
            >
              Libraries
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("courses")}
              active={tab === "courses"}
            >
              Courses
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
