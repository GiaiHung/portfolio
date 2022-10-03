/* eslint-disable @next/next/no-img-element */
import moment from 'moment'
import React from 'react'
import { urlFor } from '../../sanity'

type Props = {
  post: Post
}

function CarouselCard({ post }: Props) {
  return (
    <div className="relative h-72">
      <div
        className="absolute h-72 w-full rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${urlFor(post.mainImage).url()})` }}
      ></div>
      <div className="absolute h-72 w-full bg-gradient-to-b from-gray-400 via-gray-700 to-black opacity-50"></div>
      <div className="absolute flex h-full w-full flex-col items-center justify-between gap-y-6 p-4 text-white">
        <p className="font-light">{moment(post._createdAt).format('MMM DD YYYY')}</p>
        <h2 className="text-xl font-semibold">
          {post.title.length > 60 ? `${post.title.substring(0, 60)}...` : post.title}
        </h2>
        <div className="flex flex-col items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={urlFor(post.author.image).url()}
            alt=""
          />
          <p className="text-lg font-semibold">{post.author.name}</p>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard
