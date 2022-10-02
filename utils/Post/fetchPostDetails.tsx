import axios from 'axios'

export default async function fetchPostDetails(slug: string) {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/getPostDetails`, {
    params: {
        slug
    }
  })
  return data.postDetails
}
