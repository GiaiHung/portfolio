import axios from 'axios'

export default async function fetchExperience() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
  return data.experience
}
