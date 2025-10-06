'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Download } from 'lucide-react';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from 'react';


  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } as const,
    hidden: { opacity: 0, y: 30, transition: { duration: 0.6, ease: "easeIn" } } as const,
  }

const Header = () => {
   const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <motion.section 
      ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
    className="m-25 flex flex-col md:flex-col  justify-between items-center md:items-start gap-8 p-6 md:p-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-6xl mx-auto">
      {/* Profile Image */}
      <div className="flex-shrink-0 mt-4 md:mt-0 justify-center" >
        <div className="flex justify-self-center relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Your Name"
            fill
            sizes='( max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Info */}
      <div className="text-center md:text-left flex-1">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">
         Priyangshu Dey
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-5 max-w-2xl">
          I’m a passionate web developer focused on building clean, user-friendly, and accessible web applications. I enjoy turning ideas into reality.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          {/* Resume Button */}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
          >
            <Download className="w-4 h-4 gap-4" />
            Download Resume
          </Link>

          {/* Contact Me Button */}
          <a
            href="mailto:youremail@example.com"
            className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-md shadow hover:opacity-90 transition font-semibold"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-5 mt-2">
          <Link
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform transform hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <Github className="w-5 h-5" />
          </Link>

          <Link
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform transform hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <Linkedin className="w-5 h-5" />
          </Link>

          <Link
            href="https://instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform transform hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-pink-500"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
