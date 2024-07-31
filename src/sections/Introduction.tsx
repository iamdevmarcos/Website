import Link from 'next/link'

import { Flex, Text } from '@chakra-ui/react'
import { Container, Heading } from 'components'

const Introduction = () => (
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
            'I’m a 24-year-old Software Engineer specializing in building high-performance web applications, APIs, and mobile apps using TypeScript, React, Node.js, and Swift.'
          }
        </Text>

        <Text fontSize={{ base: '1.5rem', sm: '1.75rem' }}>
          I enjoy writing about technology and contributing to open-source
          projects, always eager to learn and share knowledge within the tech
          community.
        </Text>

        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: '1rem', md: '2rem' }}
        >
          <Text fontSize="1.5rem" color="#00CCFF" width="fit-content">
            <Link href="/about">Read more →</Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </Container>
)

export default Introduction
