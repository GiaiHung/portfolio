/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Projects() {
  const projects = [1, 2, 3, 4, 5]
  const [screenWidth, setScreenWidth] = useState(1000)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-center mt-20 mb-10 text-2xl tracking-[20px] text-gray-500 md:mb-4">
        Projects
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-0 mx-auto flex w-fit flex-col"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -screenWidth * (projects.length - 1) }}
          className="flex overflow-y-hidden"
        >
          {projects.map((project, index) => (
            <div
              key={project}
              className="flex w-screen flex-shrink-0 cursor-grab flex-col items-center space-y-8 px-6"
            >
              <motion.img
                initial={{
                  y: -200,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src="https://image.shutterstock.com/image-photo/web-design-studio-site-responsive-260nw-1670306362.jpg"
                alt=""
                className="pointer-events-none md:h-[300px] md:w-[540px] h-[200px] w-[90vw] object-cover"
              />
              <div className="mx-auto max-w-5xl space-y-6">
                <h4 className="text-center text-3xl font-semibold capitalize">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Case study {index + 1} of {projects.length}:
                  </span>{' '}
                  Apple Clone
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, cumque?
                  Possimus ratione fugit magnam iure recusandae ipsa soluta iusto, dolores
                  doloremque dolore totam assumenda unde distinctio, quas magni, explicabo porro
                  optio non molestias sunt maxime. Corrupti nulla harum voluptas quibusdam delectus.
                  Nesciunt unde eaque quasi, temporibus architecto voluptatum molestias omnis.
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects
