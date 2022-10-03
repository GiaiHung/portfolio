/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../sanity'

interface Props {
  author: Author
}

function Author({ author }: Props) {
  console.log(author)

  return (
    <div className="relative mx-auto rounded-2xl bg-violet-500 p-10 bg-opacity-80 max-w-lg">
      <div className="absolute -mt-16 flex left-1/2 -translate-x-1/2">
        <img
          src={urlFor(author.image).url()}
          className="h-14 w-14 rounded-full object-cover"
          alt=""
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-y-4 text-white'>
        <h2 className='text-2xl font-semibold'>{author.name}</h2>
        <p className='text-lg italic text-center'>{author.bio.map(item => <span key={item._id}>{item.children[0].text}</span>)}</p>
      </div>
    </div>
  )
}

export default Author
