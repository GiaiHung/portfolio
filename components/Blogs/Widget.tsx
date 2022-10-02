import moment from 'moment'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'

interface Props {
  currentPosts: Post[]
}

function Widget({ currentPosts }: Props) {
  return (
    <div className="cursor-pointer space-y-4 rounded-2xl bg-white p-8 text-black shadow-lg">
      <h3 className="border-b border-gray-200 pb-2 text-xl font-semibold">Recent Posts</h3>
      {currentPosts.map((post) => (
        <Link href={`/blogs/pageInfo/${post.slug.current}`} key={post._id}>
          <div className="space-y-2">
            <div className="flex items-center gap-x-4">
              <div className="relative h-20 w-20 flex-shrink-0">
                <Image src={urlFor(post.mainImage).url()} alt="" layout="fill" objectFit="cover" />
              </div>
              <div>
                <h4 className="text-gray-500">{moment(post._createdAt).format('MMM DD YYYY')}</h4>
                <h4 className="font-semibold text-gray-500">
                  {post.title.length > 50 ? `${post.title.substring(0, 30)}...` : post.title}
                </h4>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Widget
