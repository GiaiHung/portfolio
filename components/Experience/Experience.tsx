import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly space-y-6 overflow-hidden px-10 text-left"
    >
      <h1 className="mt-16 text-2xl text-center tracking-[20px] text-gray-500 md:mb-4">Experience</h1>

      <div className="flex w-full snap-y snap-mandatory space-x-5 overflow-x-scroll">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default Experience
