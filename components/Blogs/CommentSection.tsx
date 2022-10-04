import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../Helper/Button'

type Props = {
  id: string
  comments: CommentProps[]
}

function CommentSection({ id, comments }: Props) {
  const [commentValue, setCommentValue] = useState<string>()
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const { data: session } = useSession()

  const submitComment = async () => {
    setSubmitting(true)
    const data = {
      id,
      commentValue,
      name: session?.user?.name,
      userImage: session?.user?.image,
      email: session?.user?.email,
    }

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/createComment`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.log(error))

    setCommentValue('')
    setSubmitting(false)
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col space-y-4">
      <h1 className="mb-4 border-b-2 border-blue-500 pb-2 text-center text-2xl font-semibold max-w-lg mx-auto">
        Leave a Comment!
      </h1>
      <div className='mx-auto max-w-lg w-full space-y-4'>
        <textarea
          className="w-full max-w-lg rounded-2xl bg-gray-100 p-4 text-lg outline-none ring-2 ring-gray-300 focus:ring-gray-500"
          placeholder="Tell us what you think"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          spellCheck={false}
        />
        {session ? (
          <>
            {!submitted ? (
              <Button
                title="Submit"
                width="w-full max-w-lg"
                onClick={submitComment}
                loading={submitting}
              />
            ) : (
              <h2 className="text-lg font-semibold">
                Thanks for submitting 🧡🧡! Your comment will be displayed after we reviewed it
              </h2>
            )}
          </>
        ) : (
          <h2 className="text-lg font-semibold">Please sign in to comment 😉😉</h2>
        )}
  
        {/* Comments */}
        <div className='max-w-lg'>
          {comments.length === 0 ? (
            <h2 className="text-center text-2xl font-semibold">Be the first to comment!</h2>
          ) : (
            <div className="my-4 space-y-4">
              {comments.map((comment) => (
                <div key={comment._id} className="flex items-center gap-x-4">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image src={comment.image} alt="" layout="fill" objectFit="cover" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{comment.name}</h2>
                    <p className="text-sm lg:text-lg">{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CommentSection
