import { useQuery } from 'react-query'

import { Flex } from '@chakra-ui/react'
import { Container, Heading, Loading, Post } from 'components'
import type { PostProps } from 'components/Post'
import { getPostsByUsername } from 'services/api'

const BlogPosts = () => {
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
