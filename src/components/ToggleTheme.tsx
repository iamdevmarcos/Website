import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import { useColorMode, Box, Icon } from '@chakra-ui/react'

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLightMode = colorMode === 'light'

  return (
    <Box onClick={() => toggleColorMode()}>
      <Icon
        as={isLightMode ? BsFillMoonFill : BsFillSunFill}
        w="16px"
        h="16px"
      />
    </Box>
  )
}

export default ToggleTheme
