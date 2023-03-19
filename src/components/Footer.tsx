import { Center, Text, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const colors = {
    bg: useColorModeValue('#eee', '#0E0E0E'),
    textColor: useColorModeValue('black', 'white'),
    borderColor: useColorModeValue(
      'rgba(0, 0, 0, 0.1)',
      'rgba(255, 255, 255, 0.1)'
    )
  }

  return (
    <Center
      as="footer"
      w="100%"
      h="6.5rem"
      bg={colors.bg}
      bottom="0"
      borderTop="0.1rem solid"
      borderColor={colors.borderColor}
      marginTop={50}
      p="0 1rem"
    >
      <Text color={colors.textColor} fontSize="1.4rem" textAlign="center">
        Made with 🤍 by Marcos Mendes <br /> Deployed at ▲ Vercel
      </Text>
    </Center>
  )
}

export default Footer
