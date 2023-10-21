import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { HStack } from '@chakra-ui/react'

import CTA from './CTA'
import Logo from './Logo'
import SocialLink from './SocialLink'

const Header = () => (
  <>
    <CTA />
    <HStack
      position="sticky"
      top="0"
      bg="rgba(14, 14, 14, 0.8)"
      w="100%"
      h="6.5rem"
      p="0 3rem"
      borderBottom="0.1rem solid"
      borderColor="rgba(255, 255, 255, 0.1)"
      alignItems="center"
      justifyContent="space-between"
      backdropFilter="auto"
      backdropBlur="10px"
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
  </>
)

export default Header
