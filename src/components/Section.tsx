import { PropsWithChildren } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { Collapse, Flex, Icon, useDisclosure } from '@chakra-ui/react'
import { Heading } from 'components'

const Section = ({
  children,
  heading
}: PropsWithChildren<{ heading: string }>) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true })

  return (
    <>
      <Flex alignItems="flex-start" justifyContent="space-between">
        <Heading title={heading} />
        <Icon
          as={isOpen ? IoIosArrowUp : IoIosArrowDown}
          w="2.3rem"
          h="2.3rem"
          cursor="pointer"
          onClick={onToggle}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex flexDir="column" gap={10}>
          {children}
        </Flex>
      </Collapse>
    </>
  )
}

export default Section
