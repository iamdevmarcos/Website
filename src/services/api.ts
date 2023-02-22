import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_DEV_TO_API_URL as string

export async function getPostsByUsername() {
  const response = `${API_URL}/articles?username=iamdevmarcos`
  const { data } = await axios.get(response)
  return data
}
