"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Download, MessageSquare } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="py-8 sm:py-10 md:py-16 lg:py-20 xl:py-24 2xl:py-28 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col-span-1 md:col-span-7 text-center md:text-left"
          >
            <h1 className="text-white mb-3 sm:mb-4 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m{" "}
              </span>
              <br className="hidden sm:block" />
              <TypeAnimation
                sequence={["Ahmed", 1500, "React Dev", 1500, "Next.js Dev", 1500, "React Native Dev", 1500]}
                wrapper="span"
                speed={40}
                repeat={Number.POSITIVE_INFINITY}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
              />
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
              I build responsive, user-friendly web applications with modern technologies. Lets turn your ideas into
              reality.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link
                href="https://wa.me/+923222972285?text=Hello%20Ahmed,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800 text-white text-sm sm:text-base font-medium flex items-center justify-center gap-2 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Message Me</span>
              </Link>

              <Link
                href="https://drive.google.com/file/d/11FhzHIX_QL3LH_9RwHn0AaBZJ55zgu1Q/view?usp=sharing"
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800 text-white text-sm sm:text-base font-medium flex items-center justify-center gap-2 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download CV</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 justify-center md:justify-start">
              <motion.a
                href="https://github.com/Ah815"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 sm:p-3 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                whileHover={{ y: -5 }}
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ahmed-hussain-30862a216/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 sm:p-3 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                whileHover={{ y: -5 }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="col-span-1 md:col-span-5 flex justify-center mt-6 md:mt-0"
          >
            <div className="relative">
              {/* Animated background elements */}
              <motion.div
                className="absolute w-full h-full rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <div className="relative rounded-full bg-[#181818] w-[240px] h-[240px] xs:w-[280px] xs:h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] border-4 border-gray-800 shadow-2xl overflow-hidden">
                <motion.div className="w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/images/hero-image.webp"
                    alt="Ahmed - Fullstack Developer"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                    width={400}
                    height={400}
                    priority
                  />
                </motion.div>
              </div>

              {/* Tech stack indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gray-900/80 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-700 shadow-lg"
              >
                <span className="text-xs sm:text-sm font-medium text-gray-300">React • Next.js • React Native</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
