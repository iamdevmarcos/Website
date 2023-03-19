import Link from 'next/link'

import { Text, useColorModeValue } from '@chakra-ui/react'

const Logo = () => {
  const color = useColorModeValue('black', 'white')

  return (
    <Link href="/" aria-label="Logo">
      <Text
        color={color}
        fontSize={{ base: '1.4rem', sm: '1.6rem' }}
        fontWeight="semibold"
      >
        Marcos Mendes
      </Text>
    </Link>
  )
}

export default Logo
