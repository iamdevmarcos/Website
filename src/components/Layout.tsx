import { type PropsWithChildren } from 'react'

import { Box } from '@chakra-ui/react'

import Footer from './Footer'
import Header from './Header'
import AnimatedElement from './AnimatedElement'

const Layout = ({ children }: PropsWithChildren) => (
  <Box minH="100vh" bg="black">
    <AnimatedElement />

    <Header />
    {children}
    <Footer />
  </Box>
)

export default Layout
