import { useEffect } from 'react'
import { useQuery } from 'react-query'

import { Flex } from '@chakra-ui/react'
import { Container, Heading, Loading, Post } from 'components'
import type { PostProps } from 'components/Post'
import { getPostsByUsername } from 'services/api'

const API_URL = process.env.NEXT_PUBLIC_DEV_TO_API_URL as string

const BlogPosts = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_URL}/articles?username=iamdevmarcos`)
      const data = await response.json()
      console.log(data)
    }

    fetchData()
  })

  const {
    isLoading,
    isError,
    data: posts
  } = useQuery('posts', getPostsByUsername)

  if (isLoading) return <Loading />
  if (isError) throw new Error('Ops! Something went wrong...')

  return (
    <Container>
      <Flex
        as="section"
        aria-label="Blog Posts and Articles"
        mt={{ base: '6rem', sm: '8rem' }}
        flexDir="column"
        justifyContent="flex-start"
        gap={10}
      >
        <Heading title="Blog Posts and Articles" />
        {posts.map((item: PostProps) => (
          <Post {...item} key={item.id} />
        ))}
      </Flex>
    </Container>
  )
}

export default BlogPosts
