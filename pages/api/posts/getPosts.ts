import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

type Data = {
  posts: Post[]
}

const query = groq`
  *[_type=="post"] {
    _id,
    title,
    author->{
    name,
    image
  },
  description,
  mainImage,
  slug,
  categories[]->{
    title,
    description,
    slug
  },
  body,
  'comment': *[_type == "comment" && post._ref == ^._id && approved == true]{
    _id, 
    name, 
    email, 
    comment, 
    _createdAt
},
  }
`

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const posts: Post[] = await sanityClient.fetch(query)

  res.status(200).json({ posts })
}