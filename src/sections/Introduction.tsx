import Link from 'next/link'

import {
  Flex,
  Text,
  Link as ChakraLink,
  useColorModeValue
} from '@chakra-ui/react'
import { Container, Heading } from 'components'

const Introduction = () => {
  const colors = {
    textColor: useColorModeValue('black', 'white')
  }

  return (
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

        <Flex flexDir="column" gap={5} color={colors.textColor}>
          <Text fontSize={{ base: '1.5rem', sm: '1.75rem' }}>
            I’m a 23-year-old software engineer, focused in TypeScript, React,
            Next.js, iOS Development with Swift, and open source projects.
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
  )
}

export default Introduction
