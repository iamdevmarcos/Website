import { Box } from '@chakra-ui/react'

import Footer from './Footer'
import Header from './Header'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Box minH="100vh" bg="black">
    <Header />
    {children}
    <Footer />
  </Box>
)

export default Layout
