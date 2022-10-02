import axios from 'axios'

export default async function fetchPosts() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/getPosts`)
  return data.posts
}
