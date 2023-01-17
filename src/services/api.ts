import axios from 'axios'

const DEV_TO_API_URL = process.env.DEV_TO_API_URL as string

export async function getPostsByUsername(username: string) {
  const endpoint = `${DEV_TO_API_URL}/articles?username=${username}&page=1`
  const { data } = await axios.get(endpoint)
  return data
}
