import { Flex, Heading as ChakraHeading, Box } from '@chakra-ui/react'

export type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => (
  <Flex flexDir="column" w="100%" justify="flex-start" gap={5} color="white">
    <ChakraHeading
      fontSize={{ base: '2rem', sm: '3rem' }}
      fontWeight="semibold"
    >
      {title}
    </ChakraHeading>
    <Box bg="rgba(255, 255, 255, 0.1)" w="100%" h="0.1rem" />
  </Flex>
)

export default Heading
