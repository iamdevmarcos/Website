import { Flex } from '@chakra-ui/react'
import { Container, Post, Section } from 'components'
import { HomeProps } from 'pages'

const BlogPosts = ({ posts }: Pick<HomeProps, 'posts'>) => (
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
        {posts.map((item) => (
          <Post {...item} key={item.id} />
        ))}
      </Section>
    </Flex>
  </Container>
)

export default BlogPosts
