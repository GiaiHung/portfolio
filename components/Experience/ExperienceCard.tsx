/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../../sanity'

interface Props {
  item: Experience
}

function ExperienceCard({ item }: Props) {
  return (
    <article className="flex w-[90vw] shrink-0 cursor-grab flex-col items-center space-y-4 rounded-lg bg-[#292929] py-6 opacity-50 transition-opacity duration-200 hover:opacity-100 md:w-[500px]">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none h-32 w-32 rounded-full object-cover object-center lg:h-[150px] lg:w-[150px]"
        src={urlFor(item.companyImage).url()}
        alt=""
      />

      <div className="w-full space-y-2 px-4 text-center md:px-10 md:text-left">
        <h4 className="text-2xl font-light">{item.jobTitle}</h4>
        <p className="text-xl font-semibold">{item.company}</p>
        {/* Tech stack */}
        <div className="mx-auto flex items-center justify-center space-x-3">
          {item.technologies.map((technology, index) => (
            <img
              key={index}
              src={urlFor(technology.image).url()}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
          ))}
        </div>
        <p>
          Start {item.dateStarted} - End {item.dateEnded}
        </p>
        <div className="h-[200px] overflow-scroll">
          <ul className="ml-6 list-disc space-y-4 pb-8 text-lg">
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
