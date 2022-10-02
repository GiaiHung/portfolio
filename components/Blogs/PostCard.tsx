/* eslint-disable @next/next/no-img-element */
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'
import { AiOutlineCalendar } from 'react-icons/ai'

interface Props {
  post: Post
}

function PostCard({ post }: Props) {
  return (
    <div className="cursor-pointer space-y-6 rounded-2xl bg-white pb-12 shadow-lg duration-200 ease-in-out">
      <img
        src={urlFor(post.mainImage).url()}
        alt={post.slug.current}
        className="w-full rounded-t-2xl object-contain"
      />

      <div className="space-y-4 px-8">
        <h1 className="text-center text-2xl font-semibold">{post.title}</h1>
        <div className="flex items-center justify-between gap-x-3">
          <div className="flex items-center gap-x-3">
            <img
              src={urlFor(post.author.image).url()}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <h2 className="text-lg font-semibold">{post.author.name}</h2>
          </div>
          <span className="flex gap-x-2 text-gray-500">
            <AiOutlineCalendar className="h-6 w-6 text-gray-500" />
            {moment(post._createdAt).format('MMM DD, YYYY')}
          </span>
        </div>

        <p className="text-lg text-gray-700">{post.description}</p>
        <div className="mx-auto max-w-[300px] text-center">
          <Link href={`/blogs/pageInfo/${post.slug.current}`}>
            <h2 className="cursor-pointer rounded-2xl bg-pink-600 px-8 py-3 font-semibold text-white duration-200 ease-in-out hover:-translate-y-1">
              Continue Reading
            </h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
