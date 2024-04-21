import { Flex } from '@chakra-ui/react'
import { Container, Post, Section } from 'components'
import { PostProps } from 'components/Post'
import { usePosts } from 'libs/devto/fetch'

const BlogPosts = () => {
  const { data: posts, error, isLoading } = usePosts()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading posts!</div>

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
        <Section heading="Blog Posts and Articles">
          {posts.map((item: PostProps) => (
            <Post {...item} key={item.id} />
          ))}
        </Section>
      </Flex>
    </Container>
  )
}

export default BlogPosts
