import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

type Data = {
  postDetails: Post[]
}

const query = groq`
*[_type=="post" && slug.current == $slug][0] {
  _id,
  title,
  author->{
  name,
  image,
  bio
},
description,
mainImage,
slug,
categories[]->{
  title,
  description
},
body,
'comment': *[_type == "comment" && post._ref == ^._id && approved == true]{
  _id, 
  name, 
  email, 
  comment, 
  image,
  _createdAt
},
}
`

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const slug = req.query.slug

  const postDetails: Post[] = await sanityClient.fetch(query, {
    slug,
  })

  res.status(200).json({ postDetails })
}
