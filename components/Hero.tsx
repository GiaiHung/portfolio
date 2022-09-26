import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './Helper/BackgroundCircle'

function Hero() {
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
          src="https://hips.hearstapps.com/hmg-prod/images/longform-lead-credit-jake-stangel-1525106191.jpg?crop=0.5625xw:1xh;center,top&resize=640:*"
          alt=""
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className="relative z-10">
        <h2 className="text-md pb-6 font-semibold uppercase tracking-[12px] text-gray-500">
          Software Engineer
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
        <Link href="/blogs">
          <button className="heroButton">Blogs</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
