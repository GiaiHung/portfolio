import axios from 'axios'

export default async function fetchCurrentPosts() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/getRecentPosts`)
  return data.currentPosts
}
