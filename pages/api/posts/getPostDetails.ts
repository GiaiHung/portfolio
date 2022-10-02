import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'

type Data = {
  postDetails: Post[]
}

const query = groq`
*[_type=="post" && slug.current == $slug][0] {
    ...
  }
`

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const slug = req.query.slug
  console.log(slug);
  
  const postDetails: Post[] = await sanityClient.fetch(query, {
    slug
  })

  res.status(200).json({ postDetails })
}
