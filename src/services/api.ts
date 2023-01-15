import axios from 'axios'

const API_URL = process.env.API_URL as string

export const getArticlesByUsername = async (username: string) => {
  const { data } = await axios.get(`${API_URL}/articles?username=${username}`)
  return data
}
