import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Header() {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-4xl items-center justify-between p-5 md:p-2">
      <motion.div
        className="flex items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          url="https://www.facebook.com/giaihung.truong.9/"
          fgColor="gray"
          bgColor="transparent"
          className="headerLink"
        />
        <SocialIcon
          url="https://github.com/GiaiHung?tab=repositories"
          fgColor="gray"
          bgColor="transparent"
          className="headerLink"
        />
      </motion.div>

      <Link href='/contact'>
        <motion.div
          className="flex items-center cursor-pointer"
          initial={{
            x: 400,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <SocialIcon
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="text-md hidden font-semibold uppercase text-gray-500 md:inline-flex">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  )
}

export default Header
