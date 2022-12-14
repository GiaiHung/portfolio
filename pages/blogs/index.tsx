import styles from '../../styles/blogs.module.css'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Header, PostCard, Widget } from '../../components/Blogs'
import { GetServerSideProps } from 'next'
import fetchPosts from '../../utils/Post/fetchPosts'
import fetchCategories from '../../utils/Post/fetchCategories'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'

import { useRecoilState } from 'recoil'
import sidebarState from '../../atoms/sidebarAtom'
import categoryAtom from '../../atoms/categoryAtom'
import fetchCurrentPosts from '../../utils/Post/fetchCurrentPosts'
import CarouselPosts from '../../components/Blogs/CarouselPosts'

interface Props {
  posts: Post[]
  categories: Category[]
  currentPosts: Post[]
}

function Blogs({ posts, categories, currentPosts }: Props) {
  const [sidebarActive, setSidebarActive] = useRecoilState(sidebarState)
  const [postsState, setPostsState] = useState<Post[]>(posts)
  const [categoryState, setCategoryState] = useRecoilState(categoryAtom)

  useEffect(() => {
    if (categoryState === 'all') {
      setPostsState(posts)
      return
    }

    if (categoryState) {
      setPostsState(() =>
        posts.filter(
          (post) =>
            post.categories.findIndex((category) => category.slug.current == categoryState) >= 0
        )
      )
    }  
  }, [categoryState, posts])

  return (
    <div className={`${styles.blogs}`}>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto mb-8 max-w-7xl space-y-8 px-10">
        <Header categories={categories} />
        <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-12">
          {/* Posts */}
          <div className="space-y-10 lg:col-span-8">
            <CarouselPosts posts={postsState.slice(0, 9)} />
            {postsState.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
          {/* Widget */}
          <div className="relative lg:sticky lg:top-8 lg:col-span-4">
            <Widget currentPosts={currentPosts} />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-50 flex h-screen w-screen translate-x-full flex-col items-center justify-center gap-y-8 bg-white opacity-0 duration-300 ease-linear ${
          sidebarActive ? 'sidebarActive' : ''
        }`}
      >
        <div
          className="absolute right-6 top-6 cursor-pointer text-2xl"
          onClick={() => setSidebarActive(false)}
        >
          <FaTimes />
        </div>
        <div onClick={() => setCategoryState('all')}>
          <span
            className="cursor-pointer text-lg font-semibold text-black transition hover:text-pink-500"
            onClick={() => setSidebarActive(false)}
          >
            All
          </span>
        </div>
        {categories.map((category) => (
          <div key={category.slug.current} onClick={() => setCategoryState(category.slug.current)}>
            <span
              className="cursor-pointer text-lg font-semibold text-black transition hover:text-pink-500"
              onClick={() => setSidebarActive(false)}
            >
              {category.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const posts = await fetchPosts()
  const categories = await fetchCategories()
  const currentPosts = await fetchCurrentPosts()

  return {
    props: {
      posts,
      categories,
      currentPosts,
    },
  }
}

export default Blogs
