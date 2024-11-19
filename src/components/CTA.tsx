import { Flex, Link, Text, keyframes } from '@chakra-ui/react'

const scrollText = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`

const CTA = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg="#fff"
      color="#101828"
      textTransform="uppercase"
      h="3.8rem"
      overflow="hidden"
      position="relative"
      whiteSpace="nowrap"
    >
      <Link
        href="https://www.producthunt.com/posts/focusly-2"
        isExternal
        _hover={{ textDecor: 'none', opacity: 0.6 }}
        display="flex"
        alignItems="center"
        gap={2}
        fontWeight="semibold"
        fontSize={{ base: '0.8rem', md: '1.2rem' }}
        animation={`${scrollText} 12s linear infinite`}
        minW="50vw"
      >
        <Text letterSpacing="-0.8px" whiteSpace="nowrap">
          🎉 Boost Productivity with Focusly! – Try It Now (It’s FREE and Always
          Will Be!) 🥳
        </Text>
      </Link>
    </Flex>
  )
}

export default CTA
