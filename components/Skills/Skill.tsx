import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  directionLeft?: boolean
}

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
        alt=""
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-20 w-20 rounded-full border border-gray-500 object-cover filter duration-300 ease-in-out group-hover:grayscale lg:h-28 lg:w-28"
      />

      <div className="absolute h-20 w-20 rounded-full opacity-0 duration-300 ease-in-out group-hover:bg-gray-200 group-hover:opacity-70 lg:h-28 lg:w-28">
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl font-bold text-black">100%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
