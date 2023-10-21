import Link from 'next/link'

import { Text } from '@chakra-ui/react'

const Logo = () => (
  <Link href="/" aria-label="Logo">
    <Text
      color="white"
      fontSize={{ base: '1.4rem', sm: '1.6rem' }}
      fontWeight="semibold"
    >
      Marcos Mendes
    </Text>
  </Link>
)

export default Logo
