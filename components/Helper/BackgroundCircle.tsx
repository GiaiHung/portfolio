import React from 'react'
import { motion } from 'framer-motion'

function BackgroundCircle() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ['20%', '20%', '50%', '80%', '20%'],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative z-0 flex items-center justify-center"
      >
        <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#333]" />
        <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-[#333333]" />
        <div className="absolute mt-52 h-[400px] w-[400px] animate-pulse rounded-full border border-[#f7ab0a] opacity-20 md:h-[500px] md:w-[500px]" />
      </motion.div>
    </>
  )
}

export default BackgroundCircle
