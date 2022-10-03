import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CarouselCard from './CarouselCard'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

type Props = {
  posts: Post[]
}

function CarouselPosts({ posts }: Props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  }

  const customLeftArrow = (
    <div className="arrow-btn absolute left-2 cursor-pointer rounded-full bg-pink-600 p-3 text-center">
      <AiOutlineLeft />
    </div>
  )

  const customRightArrow = (
    <div className="arrow-btn absolute right-2 cursor-pointer rounded-full bg-pink-600 p-3 text-center">
      <AiOutlineRight />
    </div>
  )

  return (
    <div className="mb-8">
      <Carousel
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        responsive={responsive}
        infinite={true}
        containerClass="w-full"
        itemClass="pl-5"
      >
        {posts.map((post) => (
          <CarouselCard post={post} key={post._id} />
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselPosts
