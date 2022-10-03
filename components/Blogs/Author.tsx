/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../sanity'

interface Props {
  author: Author
}

function Author({ author }: Props) {
  return (
    <div className="relative mx-auto max-w-lg rounded-2xl bg-opacity-80 bg-gradient-to-r from-blue-500 to-yellow-500 p-10">
      <div className="absolute left-1/2 -mt-16 flex -translate-x-1/2">
        <img
          src={urlFor(author.image).url()}
          className="h-14 w-14 rounded-full object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4 text-white">
        <h2 className="text-2xl font-semibold">{author.name}</h2>
        <p className="text-center text-lg italic">
          {author.bio.map((item, index) => (
            <span key={index}>{item.children[0].text}</span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default Author
