import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AiOutlineGithub, AiFillFacebook, AiOutlineMail } from 'react-icons/ai'

interface Props {
  socials: Social[]
}

function Header({ socials }: Props) {
  return (
    <nav className="sticky top-0 z-20 bg-[rgb(36,36,36)] py-2 px-5">
      <header className="mx-auto flex max-w-4xl items-center justify-between">
        <motion.div
          className="flex items-center gap-x-4"
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
          <a href={socials[0].url} className="headerLink text-4xl" target='_blank' rel='noreferrer'>
            <AiOutlineGithub />
          </a>
          <a href={socials[1].url} className="headerLink text-4xl" target='_blank' rel='noreferrer'>
            <AiFillFacebook />
          </a>
        </motion.div>

        <Link href="/contact">
          <motion.div
            className="flex cursor-pointer items-center gap-x-2"
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
            <div className="headerLink">
              <AiOutlineMail />
            </div>
            <p className="text-md hidden font-semibold uppercase text-gray-500 md:inline-flex">
              Get in touch
            </p>
          </motion.div>
        </Link>
      </header>
    </nav>
  )
}

export default Header
