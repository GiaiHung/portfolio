import Image from 'next/image'
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
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircle />
      <div className="relative h-32 w-32 rounded-full overflow-hidden">
        <Image
          src="https://hips.hearstapps.com/hmg-prod/images/longform-lead-credit-jake-stangel-1525106191.jpg?crop=0.5625xw:1xh;center,top&resize=640:*"
          alt=""
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
      </div>
    </div>
  )
}

export default Hero
