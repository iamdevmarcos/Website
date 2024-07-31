import { Center, Flex, Text } from '@chakra-ui/react'

const Footer = () => (
  <Flex mt={0}>
    <Center
      as="footer"
      w="100%"
      h="6.5rem"
      bg="#0E0E0E"
      borderTop="0.1rem solid"
      borderColor="rgba(255, 255, 255, 0.1)"
      p="0 1rem"
      bottom="0"
      position="absolute"
    >
      <Text
        color="white"
        fontSize="1.4rem"
        textAlign="center"
        letterSpacing="-0.8px"
      >
        Engineered with passion ▲ <br /> by Marcos Mendes
      </Text>
    </Center>
  </Flex>
)

export default Footer
