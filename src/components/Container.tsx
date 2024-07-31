import { Box } from '@chakra-ui/react'

export type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <Box maxW="90rem" m="0 auto" p="0 3rem" letterSpacing="-0.8px">
    {children}
  </Box>
)

export default Container
