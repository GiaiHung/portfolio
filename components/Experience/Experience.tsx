import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { useMediaQuery } from 'react-responsive'

function Experience() {
  const isMobileOrTablet = useMediaQuery({ minWidth: 768 })
  const [cardWidth, setCardWidth] = useState<number>(0)
  const [multiply, setMultiply] = useState<number>(0)

  useEffect(() => {
    const currentCardWidth = isMobileOrTablet ? 500 : 365
    const currentMultiply = isMobileOrTablet ? 1.5 : 3.25

    setCardWidth(currentCardWidth)
    setMultiply(currentMultiply)
  }, [isMobileOrTablet])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-4 flex h-screen max-w-full flex-col items-center space-y-6 text-left"
    >
      <h1 className="mt-20 text-center text-2xl tracking-[15px] text-gray-500 md:mb-4">
        Experience
      </h1>

      <motion.div
        drag="x"
        dragConstraints={{ right: -10, left: -cardWidth * multiply }}
        className="flex w-full space-x-5"
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </motion.div>
    </motion.div>
  )
}

export default Experience
