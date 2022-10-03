import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../../sanity'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, commentValue: comment, name, userImage, email } = JSON.parse(req.body)

  try {
    await sanityClient.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: id,
      },
      comment,
      name,
      image: userImage,
      email,
    })
  } catch (error) {
    return res.status(500).json({ message: 'Could not update user comment', error })
  }

  return res.status(200).json({ name: 'Comment successfully updated!' })
}
