"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import ProjectTag from "./ProjectTag"
import ProjectCard from "./ProjectCard"

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Food Application",
    description:
      "Crave Point is a responsive food-focused e-commerce website built with a ReactJS frontend and Firebase databae. It includes essential features like user authentication (Login), a dynamic Cart, and a fully integrated ordering system. Access to the Cart and ordering functions is restricted to authenticated users, ensuring both security and a personalized shopping experience.",
    image: "/images/ecommerceimg.jpg",
    tag: ["All", "ReactJs"],
    gitUrl: "https://github.com/Ah815/web_engineering_project",
    previewUrl: "https://web-engineering-project-hazel.vercel.app/",
  },
  {
    id: 2,
    title: "Marketing Website",
    description:
      "Crave Point is a responsive food-focused e-commerce website built with a ReactJS frontend and Firebase databae. It includes essential features like user authentication (Login), a dynamic Cart, and a fully integrated ordering system. Access to the Cart and ordering functions is restricted to authenticated users, ensuring both security and a personalized shopping experience.",
    image: "/images/marketingimg.jpg",
    tag: ["All", "ReactJs"],
    gitUrl: "https://github.com/Ah815/Positivus-Digital-Marketing",
    previewUrl: "https://positivus-digital-marketing.vercel.app/",
  },
  {
    id: 3,
    title: "Blog Application",
    description:
      "MetaBolg is a responsive blog platform designed for reading and sharing content, built with a Next.js frontend and styled using Tailwind CSS. The backend is powered by Next.js, Prisma, and MongoDB as the database. It includes a secure login feature implemented with NextAuth, allowing users to contribute their own blogs under categories like Sports, Technology, Travel, and Business.",
    image: "/images/blogimg.jpg",
    tag: ["All", "NextJs"],
    gitUrl: "https://github.com/Ah815/Blog_App",
    previewUrl: "https://blog-app-pearl-kappa.vercel.app/",
  },
  {
    id: 4,
    title: "Car Rental App",
    description:
      "Car Rental is a mobile application built with React Native, designed for car rental services. It features a user-friendly interface, allowing users to easily browse and book cars. The app includes functionalities such as user authentication, car listings, booking management, and payment integration.",
    image: "/images/carrental.jpeg",
    tag: ["All", "Mobile App"],
    gitUrl: "https://github.com/Ah815/CarRentalAppFrontend",
    previewUrl: "https://drive.google.com/file/d/1jZu0xHkSHkjojL152m0AAfKa4lE3OdEL/view?usp=sharing",
  },
  {
    id: 5,
    title: "Perfume Store",
    description:
      "Perfume Store is a responsive e-commerce website built with NextJs. It features a user-friendly interface for browsing and purchasing perfumes, with functionalities like product filtering, user authentication, and a shopping cart. The website is designed to provide an engaging shopping experience for perfume enthusiasts.",
    image: "/images/houseofgrandeur.jpg",
    tag: ["All", "NextJs", "Freelance"],
    gitUrl: "https://github.com/houseofgrandeur/houseofgrandeur-website",
    previewUrl: "https://www.houseofgrandeur.com.pk/",
  },
  {
    id: 6,
    title: "Deen App",
    description:
      "Deen App is Islamic app hosted on play store and app store. It is a mobile application built with React Native, designed to provide users with access to Islamic content and resources. The app features a user-friendly interface, allowing users to easily navigate through various sections such as Quran, Hadith, and Islamic articles.",
    image: "/images/deen.jpg",
    tag: ["All", "Mobile App"],
    gitUrl: "https://github.com/360Xpert01/DeenApp",
    previewUrl: "https://play.google.com/store/apps/details?id=com.deen",
  },
  {
    id: 7,
    title: "Attandance App",
    description:
      "Attandance App is a mobile application built with React Native, designed for managing attendance in offices. It features a user-friendly interface, allowing offices to easily mark and manage employee attendance. The app includes functionalities such as employee profiles, attendance history, and reporting time.",
    image: "/images/attandance.png",
    tag: ["All", "Mobile App", "Freelance"],
    gitUrl: "https://github.com/360Xpert01/DeenApp",
    previewUrl: "https://drive.google.com/file/d/1inBePYUbbrP-tIpZbOnputxjA8PMJPDM/view?usp=sharing",
  },
  {
    id: 8,
    title: "Business Portfolio",
    description:
      "Business Portfolio is a responsive website built with NextJS. It features a user-friendly interface for showcasing business services and projects, with functionalities like service descriptions, and contact forms. The website is designed to provide an engaging platform for businesses to present their offerings.",
    image: "/images/rasim.png",
    tag: ["All", "NextJs", "Freelance"],
    gitUrl: "https://github.com/360Xpert01/DeenApp",
    previewUrl: "https://rasim-traders.vercel.app/solutions",
  },
]



const ProjectsSection = () => {
  const [personalTag, setPersonalTag] = useState("All")
  const [activeSection, setActiveSection] = useState("personal")
  const [isMobile, setIsMobile] = useState(false)

  const personalRef = useRef(null)
  const isPersonalInView = useInView(personalRef, { once: true, amount: 0.2 })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handlePersonalTagChange = (newTag) => {
    setPersonalTag(newTag)
  }

  const filteredPersonalProjects = projectsData
  .filter((project) => project.tag.includes(personalTag) && !project.isPrivate)


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  }

  return (
    <section id="projects" className="py-10 sm:py-16 lg:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">My Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Explore my portfolio of personal and freelance projects showcasing my skills in web and mobile development.
        </p>
      </motion.div>

     

      {/* Personal Projects Section */}
      <AnimatePresence mode="wait">
        {activeSection === "personal" && (
          <motion.div
            key="personal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white flex flex-wrap justify-center items-center gap-2 sm:gap-3 py-4 sm:py-6">
              <ProjectTag onClick={handlePersonalTagChange} name="All" isSelected={personalTag === "All"} />
              <ProjectTag onClick={handlePersonalTagChange} name="ReactJs" isSelected={personalTag === "ReactJs"} />
              <ProjectTag onClick={handlePersonalTagChange} name="NextJs" isSelected={personalTag === "NextJs"} />
              <ProjectTag onClick={handlePersonalTagChange} name="Mobile App" isSelected={personalTag === "Mobile App"} />
              <ProjectTag onClick={handlePersonalTagChange} name="Freelance" isSelected={personalTag === "Freelance"} />
            </div>

            <ul ref={personalRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <AnimatePresence>
                {filteredPersonalProjects.map((project, index) => (
                  <motion.li
                    key={project.id}
                    variants={cardVariants}
                    initial="initial"
                    animate={isPersonalInView ? "animate" : "initial"}
                    exit="exit"
                    transition={{ duration: 0.3, delay: isMobile ? 0.1 : index * 0.2 }}
                    className="h-full"
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imgUrl={project.image}
                      gitUrl={project.gitUrl}
                      previewUrl={project.previewUrl}
                    />
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection
