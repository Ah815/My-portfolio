"use client"
import { motion } from "framer-motion"

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-primary-500 font-semibold"
    : "text-gray-400 hover:text-gray-300"

  return (
    <motion.button
      whileHover={{ scale: active ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={selectTab}
      className={`mr-1 sm:mr-2 md:mr-3 font-medium py-1 px-0.5 xs:px-1 sm:px-2 ${buttonClasses} transition-all duration-300 relative text-xs xs:text-sm sm:text-base`}
    >
      {children}
      {active && (
        <motion.div
          className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 to-secondary-500"
          layoutId="activeTab"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.button>
  )
}

export default TabButton
