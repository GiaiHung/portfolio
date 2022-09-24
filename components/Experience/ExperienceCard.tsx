/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import React from 'react'

function ExperienceCard() {
  return (
    <article className="flex w-[90vw] shrink-0 cursor-pointer snap-center flex-col items-center space-y-4 rounded-lg bg-[#292929] py-6 opacity-50 transition-opacity duration-200 hover:opacity-100 md:w-[500px] lg:w-[600px]">
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

      <div className="w-full space-y-2 px-4 text-center md:px-10 md:text-left">
        <h4 className="text-2xl font-light">Manager at Amazon</h4>
        <p className="text-xl font-semibold">Amazon</p>
        {/* Tech stack */}
        <div className=" mx-auto flex items-center justify-center space-x-3">
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
        <p>Start Nov 2021 - End Sep 2022</p>
        <div className="h-[150px] overflow-scroll">
          <ul className="ml-6 list-disc space-y-4 pb-8 text-lg">
            <li>Working and developing new Amazon projects</li>
            <li>Develop new logistics method for warehouse in Amazon</li>
            <li>Mentor new employees</li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
