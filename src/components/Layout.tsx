import { type PropsWithChildren } from 'react'

import { Box } from '@chakra-ui/react'

import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: PropsWithChildren) => (
  <Box minH="100vh" bg="black">
    <Header />
    {children}
    <Footer />
  </Box>
)

export default Layout
