/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

function Projects() {
  const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="relative z-0 mx-auto flex h-screen flex-col items-center overflow-y-hidden overflow-x-scroll"
    >
      <h1 className="mt-20 mb-6 text-center text-2xl tracking-[20px] text-gray-500 md:mb-4">
        Projects
      </h1>
      <div className="absolute top-[30%] h-[400px] w-full -skew-y-12 bg-[#f7ab0a]/10" />

      <div className="relative z-30 flex h-screen w-screen snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
        {projects.map((project, index) => (
          <div
            key={project}
            className="flex w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-8 px-6"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 2 }}
              src="https://image.shutterstock.com/image-photo/web-design-studio-site-responsive-260nw-1670306362.jpg"
              alt=""
              className="h-[320px] w-[540px] object-cover"
            />
            <div className="mx-auto h-[300px] max-w-5xl space-y-6 overflow-y-scroll">
              <h4 className="text-center text-3xl font-semibold capitalize">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case study {index + 1} of {projects.length}:
                </span>{' '}
                Apple Clone
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, cumque? Possimus
                ratione fugit magnam iure recusandae ipsa soluta iusto, dolores doloremque dolore
                totam assumenda unde distinctio, quas magni, explicabo porro optio non molestias
                sunt maxime. Corrupti nulla harum voluptas quibusdam delectus. Nesciunt unde eaque
                quasi, temporibus architecto voluptatum molestias omnis.
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
