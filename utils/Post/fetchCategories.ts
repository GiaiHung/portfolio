import axios from 'axios'

export default async function fetchCategories() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/getCategories`)
  return data.categories
}
