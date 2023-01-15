import { Center, Text } from '@chakra-ui/react'

const Footer = () => (
  <Center
    as="footer"
    w="100%"
    h="6.5rem"
    bg="0E0E0E"
    bottom="0"
    borderTop="0.1rem solid rgba(255, 255, 255, 0.1)"
    marginTop={50}
  >
    <Text color="white" fontSize="1.4rem">
      Made with 🤍 by Marcos Mendes and deployed at ▲ Vercel
    </Text>
  </Center>
)

export default Footer
