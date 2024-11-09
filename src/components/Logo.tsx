import Link from 'next/link'

import { Avatar, Flex, Text } from '@chakra-ui/react'

const Logo = () => (
  <Link href="/" aria-label="Logo">
    <Flex alignItems="center" gap="12px">
      <Avatar borderRadius="md" src="https://github.com/iamdevmarcos.png" />

      <Text
        color="white"
        fontSize={{ base: '1.4rem', sm: '1.6rem' }}
        fontWeight="semibold"
      >
        Marcos Mendes
      </Text>
    </Flex>
  </Link>
)

export default Logo
