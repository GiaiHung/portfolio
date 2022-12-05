/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  projects: Project[]
}

function Projects({ projects }: Props) {
  const [screenWidth, setScreenWidth] = useState(1000)
  const demoProjects = projects.filter(project => project.demo)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="mt-20 text-center text-2xl tracking-[20px] text-gray-500 md:mb-4">
        Projects
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="relative z-0 mx-auto flex w-fit flex-col mt-6"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -screenWidth * 3 }}
          className="flex overflow-y-hidden"
        >
          {demoProjects.map((project, index) => (
            <div
              key={index}
              className="flex w-screen flex-shrink-0 cursor-grab flex-col items-center space-y-8 px-6"
            >
              <a href={project.linkToBuild} rel="noreferrer" target="_blank">
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
                  src={urlFor(project.image).url()}
                  alt=""
                  className="pointer-events-none h-[350px] w-[90vw] object-cover md:h-[400px] md:w-[640px]"
                />
              </a>

              <div className="mx-auto max-w-5xl space-y-6">
                <div className="mx-auto flex items-center justify-center gap-4">
                  {project.technologies.map((technology, index) => (
                    <div className="relative h-14 w-14 rounded-full" key={index}>
                      <Image
                        src={urlFor(technology.image).url()}
                        alt=""
                        objectFit="contain"
                        layout="fill"
                      />
                    </div>
                  ))}
                </div>
                <h4 className="text-center text-3xl font-semibold capitalize">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Case study {index + 1} of {4}:
                  </span>{' '}
                  {project.title}
                </h4>
                <p>{project.summary}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <Link href='/projects' passHref>
        <a target="_blank" rel='noreferrer' className='mx-auto'>
          <button className="mt-8 cursor-pointer bg-blue-500 py-2 px-4 text-2xl text-white transition hover:bg-blue-600 rounded-2xl font-semibold">
            See All
          </button>
        </a>
      </Link>
    </div>
  )
}

export default Projects
