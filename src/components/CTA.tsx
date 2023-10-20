import { SiMinutemailer } from 'react-icons/si'

import { Flex, Link, Text, Icon } from '@chakra-ui/react'

const CTA = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    bg="#DEBDFF"
    color="#101828"
    textTransform="uppercase"
    h="3.8rem"
  >
    <Link
      href="mailto:marcosdev.me@gmail.com"
      _hover={{ textDecor: 'none', opacity: 0.6 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={2}
      textAlign="center"
      fontWeight="semibold"
      fontSize={{ base: '0.8rem', md: '1.2rem' }}
    >
      <Text>let’s bring your project to the real world - contact me</Text>
      <Icon as={SiMinutemailer} display={{ base: 'none', md: 'block' }} />
    </Link>
  </Flex>
)

export default CTA
