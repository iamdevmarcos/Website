import Link from 'next/link'

import { Flex, Text } from '@chakra-ui/react'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Post, { PostProps } from 'components/Post'
import Project, { ProjectProps } from 'components/Project'
import { projectsMock } from 'mocks/projects'
import * as api from 'services/api'

export type HomeProps = {
  posts: PostProps[]
  personalProjects: ProjectProps[]
}

export default function Home({ posts, personalProjects }: HomeProps) {
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
          {posts.map((item) => (
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

export async function getStaticProps() {
  const posts = await api.getPostsByUsername('iamdevmarcos')

  return {
    props: {
      posts,
      personalProjects: projectsMock
    },
    revalidate: 60
  }
}
