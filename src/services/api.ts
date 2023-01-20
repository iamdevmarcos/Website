import axios from 'axios'

export async function getPostsByUsername() {
  const endpoint = `https://dev.to/api/articles?username=iamdevmarcos`
  const { data } = await axios.get(endpoint)
  return data
}
