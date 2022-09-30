import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import BackgroundCircle from './Helper/BackgroundCircle'

interface Props {
  pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hi, My name is Hưng',
      'Welcome to my portfolio page!',
      'Have fun checking around ~￣▽￣~',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4 overflow-hidden text-center md:space-y-8">
      <BackgroundCircle />
      <div className="relative h-32 w-32 overflow-hidden rounded-full">
        <Image
          src={urlFor(pageInfo.profilePic).url()}
          alt=""
          objectFit="cover"
          layout="fill"
          priority
        />
      </div>

      <div className="relative z-10">
        <h2 className="text-md pb-6 font-semibold uppercase tracking-[12px] text-gray-500">
          {pageInfo.role}
        </h2>
        <h1 className="px-6 text-2xl font-semibold lg:px-10 lg:text-4xl">
          <span>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
      </div>

      <div className="relative z-10 flex items-center">
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
        <Link href="/blogs" passHref>
          <a target="_blank" rel="noreferrer">
            <button className="heroButton">Blogs</button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Hero
