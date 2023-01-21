import { useQuery } from 'react-query'

import Link from 'next/link'

import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Post, { PostProps } from 'components/Post'
import Project from 'components/Project'
import { personalProjects } from 'mocks/projects'
import { getPostsByUsername } from 'services/api'

export default function Home() {
  const {
    isLoading,
    isError,
    data: posts
  } = useQuery('posts', getPostsByUsername)

  if (isLoading) return null
  if (isError) throw new Error('Ops! Something went wrong...')

  return (
    <Layout>
      <Container>
        <Flex
          as="main"
          aria-label="About me"
          mt={{ base: '6rem', sm: '8rem' }}
          flexDir="column"
          justifyContent="flex-start"
          gap={10}
        >
          <Heading title="Hey! I'm Marcos Mendes" />

          <Flex flexDir="column" gap={5} color="white">
            <Text fontSize={{ base: '1.5rem', sm: '1.75rem' }}>
              {
                "I'm a 22-year-old software engineer, focused in TypeScript, React, Next.js, Testing Ecosystem, and Open source projects."
              }
            </Text>

            <Text fontSize={{ base: '1.4rem', sm: '1.5rem' }}>
              P.S. this website is open-source and available on{' '}
              <ChakraLink
                href="https://github.com/iamdevmarcos/my-personal-website"
                isExternal
                fontWeight="bold"
                textDecoration="underline"
                textUnderlineOffset={3}
              >
                Github.
              </ChakraLink>
            </Text>

            <Text fontSize="1.5rem" color="#00CCFF" width="fit-content">
              <Link href="/about">Read more →</Link>
            </Text>
          </Flex>
        </Flex>
      </Container>

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

      <Container>
        <Flex
          as="section"
          aria-label="Blog Posts and Articles"
          mt={{ base: '6rem', sm: '8rem' }}
          flexDir="column"
          justifyContent="flex-start"
          gap={10}
        >
          <Heading title="Personal Projects" />
          {personalProjects.map((item, index) => (
            <Project
              key={index}
              name={item.name}
              description={item.description}
              githubLink={item.githubLink}
              npmLink={item.npmLink}
              previewLink={item.previewLink}
            />
          ))}
        </Flex>
      </Container>
    </Layout>
  )
}
