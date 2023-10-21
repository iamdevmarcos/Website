import type { IconType } from 'react-icons'

import { Icon, Link } from '@chakra-ui/react'

export type SocialLinkProps = {
  href: string
  icon: IconType
  ariaLabel: string
}

const SocialLink = ({ href, icon, ariaLabel }: SocialLinkProps) => {
  return (
    <Link href={href} isExternal>
      <Icon
        as={icon}
        w={{ base: '2.3rem', sm: '2.7rem' }}
        h={{ base: '2.3rem', sm: '2.7rem' }}
        color="white"
        aria-label={ariaLabel}
        _hover={{
          opacity: 0.6
        }}
      />
    </Link>
  )
}

export default SocialLink
