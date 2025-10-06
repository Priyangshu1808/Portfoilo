// import { Card, CardContent } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { cn } from "@/lib/utils"

// function About() {
//   return (
//     <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
//       <h4 className='text-indigo-600 dark:text-indigo-400 font-semibold mb-2 text-center'>Introduction</h4>
//       <h2 className='text-4xl font-extrabold mb-6 text-center'>About Me</h2>
//       <p className='text-lg leading-7 text-gray-700 dark:text-gray-300 text-center'>
//         Hello! I'm Priyangshu, a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code. When I'm not coding, you can find me exploring the latest tech trends or indulging in my love for photography.
//       </p>

//         <Card className="shadow-md">
//           <CardContent className="p-6 space-y-4">
//             <p className="text-muted-foreground text-lg">
//               Hello! I'm a passionate front-end developer who loves creating
//               beautiful, functional web experiences. I specialize in building
//               modern web apps using React, Next.js, and Tailwind CSS.
//             </p>

//             <Separator />

//             <p className="text-muted-foreground text-lg">
//               I enjoy turning complex problems into elegant solutions and am
//               always looking to improve my skills and stay current with industry
//               trends. Outside of coding, I’m into UI/UX design, open-source
//               projects, and coffee-fueled creativity.
//             </p>

//             <p className="text-muted-foreground text-lg">
//               Currently open to freelance projects, remote work, or any exciting
//               collaboration opportunities.
//             </p>
//           </CardContent>
//         </Card>
//     </div>
//   )
// }

// export default About

// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { useEffect, useState } from "react"
// import { motion, useAnimation } from "framer-motion"
// import { useInView } from "react-intersection-observer"

// export default function About() {
//   const controls = useAnimation()
//   const [ref, inView] = useInView({ threshold: 0.2 })

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible")
//     } else {
//       controls.start("hidden")
//     }
//   }, [controls, inView])

//   const variants = {
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//     hidden: { opacity: 0, y: 30, transition: { duration: 0.6 } },
//   }

//   return (
//     <section id="about" className="py-20 bg-muted relative">
//       <div className="container mx-auto px-4 max-w-3xl">
//         <motion.div
//           ref={ref}
//           animate={controls}
//           initial="hidden"
//           variants={variants}
//         >
//           <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

//           <Card className="shadow-xl">
//             <CardContent className="p-6 space-y-4">
//               <p className="text-muted-foreground text-lg">
//                 I’m a Full Stack Web Developer with hands-on experience in both
//                 front-end and back-end engineering. I specialize in building
//                 high-performance, scalable applications using technologies like
//                 <span className="font-semibold"> Next.js</span>,{" "}
//                 <span className="font-semibold">React</span>,{" "}
//                 <span className="font-semibold">Express</span>, and{" "}
//                 <span className="font-semibold">MongoDB</span>.
//               </p>

//               <Separator />

//               <p className="text-muted-foreground text-lg">
//                 On the front end, I focus on delivering pixel-perfect UI and smooth
//                 UX using modern tools and component libraries. On the back end, I
//                 architect robust APIs and data layers, ensuring everything is secure
//                 and optimized for performance.
//               </p>

//               <p className="text-muted-foreground text-lg">
//                 I'm always looking for challenging opportunities to build meaningful
//                 products and solve real-world problems.
//               </p>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { useEffect } from "react"
// import { motion, useAnimation } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import {
//   SiNextdotjs,
//   SiReact,
//   SiTailwindcss,
//   SiMongodb,
//   SiExpress,
//   SiNodedotjs,
// } from "react-icons/si"

// export default function AboutMe() {
//   const controls = useAnimation()
//   const [ref, inView] = useInView({ threshold: 0.2 })

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible")
//     } else {
//       controls.start("hidden")
//     }
//   }, [controls, inView])

//   const variants = {
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } as const,
//     hidden: { opacity: 0, y: 30, transition: { duration: 0.6, ease: "easeIn" } } as const,
//   }

//   return (
//     <section id="about" className=" relative py-20 bg-background dark:bg-background-dark ">
//       <div className="container mx-auto px-4 max-w-3xl">
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={variants}
//         >
//           <h2 className="text-4xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
//             About Me
//           </h2>

//           <Card className="shadow-lg dark:shadow-lg/10">
//             <CardContent className="p-6 space-y-6">
//               <div className="flex flex-col md:flex-row items-center gap-6">
//                 <div className="flex-shrink-0">
//                   <div className="w-full md:w-[300px] h-[300px] relative flex-shrink-0 rounded-lg overflow-hidden shadow-md border border-border dark:border-border-dark">
//                 <Image
//                   src="/profile.jpg"
//                   alt="Profile"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 300px"
//                 />
//               </div>

//                   </div>
//                 </div>
//                 <div className="flex-1 space-y-2">
//                   <p className="text-lg text-foreground dark:text-foreground-dark">
//                     I’m a **Full Stack Web Developer** with strong command over both
//                     front-end and back-end engineering. I build scalable and
//                     maintainable web apps using technologies like
//                     <span className="font-semibold"> Next.js</span>,{" "}
//                     <span className="font-semibold">React</span>,{" "}
//                     <span className="font-semibold">Express</span>, and{" "}
//                     <span className="font-semibold">MongoDB</span>.
//                   </p>
//                   <p className="text-lg text-foreground dark:text-foreground-dark">
//                     On the front-end side, I focus on creating polished user
//                     interfaces and seamless user experiences. On the back-end, I
//                     design APIs, manage databases, and ensure everything is robust,
//                     performant, and secure.
//                   </p>
//                   <p className="text-lg text-foreground dark:text-foreground-dark">
//                     I’m always exploring new tools, pushing my limits, and open to
//                     interesting collaborations and projects.
//                   </p>
//                 </div>


//               <Separator />

//               {/* Tech Stack Icons / Stats */}
//               <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
//                 <motion.div
//                   className="flex flex-col items-center text-foreground dark:text-foreground-dark"
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.2, duration: 0.5 }}
//                 >
//                   <SiNextdotjs size={32} />
//                   <span className="mt-1 text-sm">Next.js</span>
//                 </motion.div>
//                 <motion.div
//                   className="flex flex-col items-center text-foreground dark:text-foreground-dark"
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.3, duration: 0.5 }}
//                 >
//                   <SiReact size={32} />
//                   <span className="mt-1 text-sm">React</span>
//                 </motion.div>
//                 <motion.div
//                   className="flex flex-col items-center text-foreground dark:text-foreground-dark"
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.4, duration: 0.5 }}
//                 >
//                   <SiTailwindcss size={32} />
//                   <span className="mt-1 text-sm">Tailwind</span>
//                 </motion.div>
//                 <motion.div
//                   className="flex flex-col items-center text-foreground dark:text-foreground-dark"
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.5, duration: 0.5 }}
//                 >
//                   <SiMongodb size={32} />
//                   <span className="mt-1 text-sm">MongoDB</span>
//                 </motion.div>
//                 <motion.div
//                   className="flex flex-col items-center text-foreground dark:text-foreground-dark"
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.6, duration: 0.5 }}
//                 >
//                   <SiExpress size={32} />
//                   <span className="mt-1 text-sm">Express</span>
//                 </motion.div>
//                 <motion.div
//                   className="flex flex-col items-center text-foreground dark:text-foreground-dark"
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.7, duration: 0.5 }}
//                 >
//                   <SiNodedotjs size={32} />
//                   <span className="mt-1 text-sm">Node.js</span>
//                 </motion.div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si"

export default function AboutMe() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } as const,
    hidden: { opacity: 0, y: 30, transition: { duration: 0.6, ease: "easeIn" } } as const,
  }

  return (
    <section id="about" className="relative py-20 bg-background dark:bg-background-dark">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
            About Me
          </h2>

          <Card className="shadow-lg dark:shadow-lg/10">
            <CardContent className="p-8 md:flex gap-8">
              {/* Left - Profile Picture */}
              <div className="relative w-full md:w-[300px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-border dark:border-border-dark">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  priority
                />
              </div>

              {/* Right - Text Content */}
              <div className="flex-1 space-y-4 mt-6 md:mt-0">
                <p className="text-lg text-foreground dark:text-foreground-dark">

                  I'm a <strong>Full Stack Web Developer</strong> with a passion for building
                  robust, scalable, and user-centric applications. My expertise includes
                  working with technologies like <strong>Next.js</strong>, <strong>React</strong>,
                  <strong> MongoDB</strong>, and <strong>Express</strong>.
                </p>
                <p className="text-lg text-foreground dark:text-foreground-dark">
                  I enjoy architecting clean backends, designing thoughtful user experiences,
                  and bringing both sides together in production-ready applications.
                </p>
                <p className="text-lg text-foreground dark:text-foreground-dark">
                  I'm always exploring new tools, frameworks, and ways to optimize the dev
                  process. Let's build something amazing!
                </p>

                <Separator className="my-4" />

                {/* Tech Stack Icons */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                  <TechIcon icon={<SiNextdotjs size={28} />} label="Next.js" delay={0.1} />
                  <TechIcon icon={<SiReact size={28} />} label="React" delay={0.2} />
                  <TechIcon icon={<SiTailwindcss size={28} />} label="Tailwind" delay={0.3} />
                  <TechIcon icon={<SiExpress size={28} />} label="Express" delay={0.4} />
                  <TechIcon icon={<SiMongodb size={28} />} label="MongoDB" delay={0.5} />
                  <TechIcon icon={<SiNodedotjs size={28} />} label="Node.js" delay={0.6} />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Animated Tech Icon component
const TechIcon = ({
  icon,
  label,
  delay,
}: {
  icon: React.ReactNode
  label: string
  delay: number
}) => {
  return (
    <motion.div
      className="flex flex-col items-center text-foreground dark:text-foreground-dark"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
    >
      {icon}
      <span className="mt-1 text-sm">{label}</span>
    </motion.div>
  )
}
