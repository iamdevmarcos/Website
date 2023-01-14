import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { HStack } from '@chakra-ui/react'

import Logo from './Logo'
import SocialLink from './SocialLink'

const Header = () => (
  <HStack
    position="sticky"
    top="0"
    bg="#0E0E0E"
    w="100%"
    h="6.5rem"
    p="0 3rem"
    borderBottom="0.1rem solid rgba(255, 255, 255, 0.1)"
    alignItems="center"
    justifyContent="space-between"
  >
    <Logo />

    <HStack gap={5} aria-labelledby="Social Links">
      <SocialLink
        icon={AiFillLinkedin}
        href="https://www.linkedin.com/in/iamdevmarcos/"
        ariaLabel="Linkedin Icon"
      />

      <SocialLink
        icon={AiFillGithub}
        href="https://github.com/iamdevmarcos"
        ariaLabel="Github Icon"
      />
    </HStack>
  </HStack>
)

export default Header
