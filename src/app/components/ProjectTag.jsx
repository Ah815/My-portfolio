"use client"

import { motion } from "framer-motion"

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500 bg-primary-500/10"
    : "text-gray-400 border-gray-700 hover:border-gray-500 hover:text-gray-300"

  return (
    <motion.button
      className={`px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 rounded-full border ${buttonStyles} text-xs xs:text-sm sm:text-base transition-all duration-300`}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.button>
  )
}

export default ProjectTag
