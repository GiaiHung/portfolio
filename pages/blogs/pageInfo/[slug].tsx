import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import fetchPostDetails from '../../../utils/Post/fetchPostDetails'

interface Props {
  postDetails: Post[]
}

function Blog({ postDetails }: Props) {
  console.log(postDetails);
  
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>This is a slug blog</div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }: any) => {
  const postDetails = await fetchPostDetails(params.slug)

  return {
    props: {
      postDetails,
    },
  }
}

export default Blog
