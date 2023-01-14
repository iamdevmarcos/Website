import Link from 'next/link'

import { Flex, Text } from '@chakra-ui/react'
import axios from 'axios'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Layout from 'components/Layout'
import Post, { PostProps } from 'components/Post'

type HomeProps = {
  data: PostProps[]
}

export default function Home({ data }: HomeProps) {
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
          {data.map((item) => (
            <Post {...item} key={item.id} />
          ))}
        </Flex>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(
    'https://dev.to/api/articles?username=iamdevmarcos'
  )

  return {
    props: {
      data
    },
    revalidate: 60
  }
}
