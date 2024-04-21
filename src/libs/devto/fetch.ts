import { useQuery } from 'react-query'

const fetchPosts = async () => {
  const response = await fetch(
    `https://dev.to/api/articles?username=iamdevmarcos`
  )
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

export function usePosts() {
  return useQuery('posts', fetchPosts)
}
