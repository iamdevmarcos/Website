import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import { useColorMode, Icon, Button } from '@chakra-ui/react'

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLightMode = colorMode === 'light'

  return (
    <Button
      onClick={() => toggleColorMode()}
      cursor="pointer"
      aria-label="Toggle Theme Button"
    >
      <Icon
        as={isLightMode ? BsFillMoonFill : BsFillSunFill}
        w="16px"
        h="16px"
      />
    </Button>
  )
}

export default ToggleTheme
