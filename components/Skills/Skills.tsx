import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'

interface Props {
  skills: Skill[]
}

function Skills({ skills }: Props) {
  return (
    <div className="relative mx-2 flex max-w-5xl flex-col items-center md:mx-auto">
      <h1 className="mt-20 text-center text-2xl tracking-[20px] text-gray-500 md:mb-4">Skills</h1>
      <h2 className="text-center text-lg font-semibold tracking-[10px] text-gray-500">
        Hover for skills proficiency
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-5"
      >
        {skills.slice(0, Math.floor(skills.length / 2)).map((skill, index) => (
          <Skill skill={skill} key={index} directionLeft />
        ))}

        {skills.slice(Math.ceil(skills.length / 2), skills.length).map((skill, index) => (
          <Skill skill={skill} key={index} />
        ))}
      </motion.div>
    </div>
  )
}

export default Skills
