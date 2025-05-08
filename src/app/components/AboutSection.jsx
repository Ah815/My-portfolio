"use client"

import { useTransition, useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Code, Database, BookOpen, GraduationCap, Library, Languages } from "lucide-react"
import TabButton from "./TabButton"

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    icon: <Languages className="w-4 h-4 xs:w-5 xs:h-5 mr-1 xs:mr-2" />,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
        {[
          { name: "JavaScript", level: 90 },
          { name: "Python", level: 80 },
        ].map((skill, index) => (
          <div key={index} className="mb-3 xs:mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-xs xs:text-sm sm:text-base">{skill.name}</span>
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5 xs:h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 * index }}
                className="h-1.5 xs:h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Frontend",
    id: "frontend",
    icon: <Code className="w-4 h-4 xs:w-5 xs:h-5 mr-1 xs:mr-2" />,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
        {[
          { name: "ReactJS", level: 92 },
          { name: "Next.js", level: 88 },
          { name: "React Native", level: 85 },
          { name: "CSS", level: 90 },
          { name: "Tailwind CSS", level: 90 },
        ].map((skill, index) => (
          <div key={index} className="mb-3 xs:mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-xs xs:text-sm sm:text-base">{skill.name}</span>
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5 xs:h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 * index }}
                className="h-1.5 xs:h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  
  {
    title: "Libraries",
    id: "library",
    icon: <Library className="w-4 h-4 xs:w-5 xs:h-5 mr-1 xs:mr-2" />,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
        {[
          { name: "Material UI", level: 85 },
          { name: "Ant Design", level: 80 },
          { name: "Shadcn UI", level: 90 },
        ].map((skill, index) => (
          <div key={index} className="mb-3 xs:mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-xs xs:text-sm sm:text-base">{skill.name}</span>
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5 xs:h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 * index }}
                className="h-1.5 xs:h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <GraduationCap className="w-4 h-4 xs:w-5 xs:h-5 mr-1 xs:mr-2" />,
    content: (
      <div className="space-y-3 xs:space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 p-3 xs:p-4 rounded-lg border border-gray-700"
        >
          <h3 className="font-bold text-sm xs:text-base sm:text-lg mb-1 xs:mb-2">Bachelors in Software Engineering</h3>
          <p className="text-gray-300 text-xs xs:text-sm">Sir Syed University of Engineering and Technology</p>
          <p className="text-gray-400 text-xs xs:text-sm">Karachi, Pakistan</p>
          <div className="flex items-center mt-2">
            <span className="bg-primary-500/20 text-primary-400 text-xs px-2 py-0.5 xs:py-1 rounded">2020 - 2024</span>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Courses",
    id: "courses",
    icon: <BookOpen className="w-4 h-4 xs:w-5 xs:h-5 mr-1 xs:mr-2" />,
    content: (
      <div className="space-y-3 xs:space-y-4">
        {[
          { name: "MERN Stack Development", provider: "SMIT", year: "2023", certificate: true },
          { name: "React Native Mobile App Development", provider: "SMIT", year: "2024", certificate: true },
        ].map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 p-3 xs:p-4 rounded-lg border border-gray-700"
          >
            <h3 className="font-bold text-sm xs:text-base sm:text-lg">{course.name}</h3>
            <p className="text-gray-300 text-xs xs:text-sm">{course.provider}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="bg-primary-500/20 text-primary-400 text-xs px-2 py-0.5 xs:py-1 rounded">
                {course.year}
              </span>
              {course.certificate && (
                <span className="text-xs text-green-400 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 xs:h-4 xs:w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Certified
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("languages")
  const [isPending, startTransition] = useTransition()
  const [screenSize, setScreenSize] = useState("md")

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 480) return setScreenSize("xs")
      if (width < 640) return setScreenSize("sm")
      if (width < 768) return setScreenSize("md")
      if (width < 1024) return setScreenSize("lg")
      if (width < 1280) return setScreenSize("xl")
      return setScreenSize("2xl")
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  // Determine if we need to show compact tabs
  const isCompactTabs = screenSize === "xs" || screenSize === "sm"

  return (
    <section className="text-white py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20" id="about">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 xs:mb-3">About Me</h2>
          <div className="w-16 xs:w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 xs:gap-6 sm:gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 lg:col-span-4 xl:col-span-5 relative"
          >
            <div className="relative z-10 mx-auto max-w-xs sm:max-w-sm md:max-w-none">
              <div className="bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 absolute -inset-3 xs:-inset-4 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-900 p-1 xs:p-2 rounded-xl border border-gray-800 shadow-xl">
                <Image
                  src="/images/about-image.png"
                  width={500}
                  height={500}
                  alt="Ahmed - Full Stack Developer"
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute -bottom-3 -right-3 xs:-bottom-4 xs:-right-4 bg-gray-900/80 backdrop-blur-sm px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full border border-gray-700 shadow-lg">
                  <span className="text-xs xs:text-sm font-medium text-gray-300">1.5 Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-7 lg:col-span-8 xl:col-span-7 text-left flex flex-col h-full"
          >
            <div className="mb-4 xs:mb-5 sm:mb-6">
              <h3 className="text-xl xs:text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 xs:mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Full Stack Software Engineer
              </h3>
              <p className="text-gray-300 text-sm xs:text-base leading-relaxed">
                I&apos;m a Full Stack Software Engineer with a focus on creating responsive, interactive, and scalable
                web applications. With expertise in JavaScript, Python, and Java, I am skilled in both frontend and
                backend development.
              </p>
              <p className="text-gray-300 text-sm xs:text-base mt-2 xs:mt-3 leading-relaxed">
                My frontend stack includes ReactJS, Next.js, React Native, Tailwind CSS, Material UI, Ant Design, and
                Shadcn UI. On the backend, I work with Node.js, Express.js, Next.js, MongoDB, and Firebase to deliver
                robust solutions.
              </p>
              <p className="text-gray-300 text-sm xs:text-base mt-2 xs:mt-3 leading-relaxed">
                Proficient in Git for version control, I&apos;m a fast learner with a passion for technology and
                problem-solving. I thrive in collaborative environments and am excited to contribute to projects that
                push the boundaries of web development.
              </p>
            </div>

            {/* Tab navigation */}
            <div className="mb-4 xs:mb-5 sm:mb-6">
              <div
                className={`flex ${
                  isCompactTabs ? "flex-wrap gap-y-1 xs:gap-y-2" : "flex-row"
                } justify-start border-b border-gray-800`}
              >
                {TAB_DATA.map((tabItem) => (
                  <TabButton key={tabItem.id} selectTab={() => handleTabChange(tabItem.id)} active={tab === tabItem.id}>
                    <div className="flex items-center">
                      {tabItem.icon}
                      <span className={isCompactTabs ? "text-xs" : ""}>{tabItem.title}</span>
                    </div>
                  </TabButton>
                ))}
              </div>
            </div>

            {/* Tab content with animation */}
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow bg-gray-900/50 backdrop-blur-sm p-3 xs:p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-800"
            >
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
