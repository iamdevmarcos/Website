import { SiMinutemailer } from 'react-icons/si'
import ConfettiExplosion from 'react-confetti-explosion'

import { Flex, Link, Text, Icon } from '@chakra-ui/react'
import { useState } from 'react'

const CTA = () => {
  const [isExploding, setIsExploding] = useState(false)

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg="#DEBDFF"
      color="#101828"
      textTransform="uppercase"
      h="3.8rem"
    >
      {isExploding && <ConfettiExplosion />}

      <Link
        onClick={() => setIsExploding(true)}
        href="https://cal.com/marcosmendes/30min?user=marcosmendes"
        isExternal
        _hover={{ textDecor: 'none', opacity: 0.6 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        textAlign="center"
        fontWeight="semibold"
        fontSize={{ base: '0.8rem', md: '1.2rem' }}
      >
        <Text>let’s bring your project to the real world - or hire me</Text>
        <Icon as={SiMinutemailer} display={{ base: 'none', md: 'block' }} />
      </Link>
    </Flex>
  )
}

export default CTA
