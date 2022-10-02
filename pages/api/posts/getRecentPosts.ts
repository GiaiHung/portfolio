import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

type Data = {
  currentPosts: Post[]
}

const query = groq`*[_type=="post"] | order(_createdAt desc)[0..2] {
    ...
}`

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const currentPosts: Post[] = await sanityClient.fetch(query)

  res.status(200).json({ currentPosts })
}
