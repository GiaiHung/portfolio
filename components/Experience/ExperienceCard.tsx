/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import React from 'react'

function ExperienceCard() {
  return (
    <article className="flex w-[300px] shrink-0 cursor-pointer snap-center flex-col items-center space-y-4 rounded-lg bg-[#292929] py-6 opacity-50 transition-opacity duration-200 hover:opacity-100 md:w-[500px] lg:w-[600px]">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        className="h-32 w-32 rounded-full object-cover object-center lg:h-[150px] lg:w-[150px]"
        src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
        alt=""
      />

      <div className="space-y-2 px-0 md:px-10">
        <h4 className="text-2xl font-light">Title</h4>
        <p className="text-xl font-semibold">Company</p>
        {/* Tech stack */}
        <div className="flex items-center space-x-3">
          <img
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <img
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <img
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <img
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
        <p>STart - end</p>
        <div className='h-[150px] overflow-scroll'>
          <ul className="ml-6 list-disc space-y-4 text-lg pb-8">
            <li>JOB 1</li>
            <li>JOB 2</li>
            <li>JOB 3</li>
            <li>JOB 4</li>
            <li>JOB 5</li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
