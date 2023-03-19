import { Box, useColorModeValue } from '@chakra-ui/react'

import Footer from './Footer'
import Header from './Header'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const bg = useColorModeValue('white', 'black')

  return (
    <Box minH="100vh" bg={bg}>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout
