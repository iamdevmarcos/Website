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
      },
      body: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
      }
    }
  }
})

export default theme
