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
            'I’m a 24-year-old software engineer with a focus on building high-performance web applications and APIs. I specialize in TypeScript, React, NodeJS, Java, Spring Boot, Jest, Cypress, AWS, Azure DevOps, Solid, Patterns.'
          }
        </Text>

        <Text fontSize={{ base: '1.5rem', sm: '1.75rem' }}>
          I utilize Clean Architecture, SOLID principles, TDD, and DDD to
          deliver scalable and maintainable systems that balance performance,
          usability, and reliability.
        </Text>

        <Text fontSize={{ base: '1.5rem', sm: '1.75rem' }}>
          Passionate about continuous learning, I enjoy contributing to
          open-source projects and writing about technology, always eager to
          embrace new challenges and collaborate within the tech community.
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
