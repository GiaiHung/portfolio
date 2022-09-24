import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <div className="relative mx-2 flex h-screen max-w-5xl flex-col items-center md:mx-auto">
      <h1 className="mt-24 text-center text-2xl tracking-[20px] text-gray-500 md:mb-4">Skills</h1>
      <h2 className="text-xl text-center font-semibold tracking-[10px] text-gray-500">
        Hover for skills proficiency
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-4"
      >
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </motion.div>
    </div>
  )
}

export default Skills
