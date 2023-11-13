import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      html: {
        fontSize: '62.5%'
      }
    }
  }
})

export default theme
