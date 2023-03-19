import type { IconType } from 'react-icons'

import { Icon, Link, useColorModeValue } from '@chakra-ui/react'

export type SocialLinkProps = {
  href: string
  icon: IconType
  ariaLabel: string
}

const SocialLink = ({ href, icon, ariaLabel }: SocialLinkProps) => {
  const color = useColorModeValue('black', 'white')

  return (
    <Link href={href} isExternal>
      <Icon
        as={icon}
        w={{ base: '2.3rem', sm: '2.7rem' }}
        h={{ base: '2.3rem', sm: '2.7rem' }}
        color={color}
        aria-label={ariaLabel}
      />
    </Link>
  )
}

export default SocialLink
