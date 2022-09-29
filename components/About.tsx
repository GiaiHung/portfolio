import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity'

interface Props {
  pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <div className="relative flex max-w-5xl flex-col items-center space-y-6 text-center md:mx-auto md:text-left">
      <h1 className="mt-24 text-center text-2xl tracking-[20px] text-gray-500 md:mb-4">About</h1>

      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:px-6">
        <motion.img
          src={urlFor(pageInfo.heroImage).url()}
          initial={{ x: -300, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="h-56 w-56 shrink-0 rounded-full object-cover md:mb-0 md:h-[400px] md:w-[300px] md:rounded-lg"
        />

        <div className="flex-1 px-4">
          <h1 className="mb-4 text-center text-2xl font-semibold">
            Here is my little <span className="underline decoration-yellow-500">story</span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-sm md:text-base"
          >
            <p className="leading-7 tracking-wide">
              {pageInfo.backgroundInformation}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
