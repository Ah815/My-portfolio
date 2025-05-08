"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BracketsIcon as CodeBracket, Eye } from "lucide-react"
import Image from "next/image"

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl, isFreelance = false }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-full rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm group"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.7)" }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isFreelance && (
        <div className="absolute top-3 right-3 z-10 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
          Freelance
        </div>
      )}

      <div className="relative h-48 xs:h-52 sm:h-56 md:h-48 lg:h-56 xl:h-64 overflow-hidden">
        <Image
          src={imgUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          width={500}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

       
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-xs xs:text-sm text-gray-300 line-clamp-3 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs xs:text-sm text-gray-400 hover:text-primary-500 transition-colors"
          >
            View Code
          </a>
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs xs:text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
