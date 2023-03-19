import {
  Flex,
  Heading as ChakraHeading,
  Box,
  useColorModeValue
} from '@chakra-ui/react'

export type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => {
  const colors = {
    textColor: useColorModeValue('black', 'white'),
    bg: useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.1)')
  }

  return (
    <Flex
      flexDir="column"
      w="100%"
      justify="flex-start"
      gap={5}
      color={colors.textColor}
    >
      <ChakraHeading
        fontSize={{ base: '2rem', sm: '3rem' }}
        fontWeight="semibold"
      >
        {title}
      </ChakraHeading>
      <Box bg="rgba(255, 255, 255, 0.1)" w="100%" h="0.1rem" />
    </Flex>
  )
}

export default Heading
