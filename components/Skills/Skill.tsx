import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../../sanity'

interface Props {
  directionLeft?: boolean
  skill: Skill
}

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        src={urlFor(skill.image).url()}
        alt=""
        initial={{ opacity: 0, x: directionLeft ? -100 : 100 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-20 w-20 rounded-full border border-gray-500 object-cover filter duration-300 ease-in-out group-hover:grayscale lg:h-28 lg:w-28"
      />

      <motion.div
        initial={{ x: directionLeft ? -200 : 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute h-20 w-20 rounded-full opacity-0 duration-300 ease-in-out group-hover:bg-gray-200 group-hover:opacity-70 lg:h-28 lg:w-28"
      >
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl font-bold text-black">{skill.progress}%</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Skill
