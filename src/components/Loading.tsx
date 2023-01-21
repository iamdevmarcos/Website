import { Flex, Image } from '@chakra-ui/react'

const Loading = () => (
  <Flex
    minH="100vh"
    bg="black"
    alignItems="center"
    justifyContent="center"
    position="relative"
  >
    <Image src="/assets/loading.gif" alt="Loading" w="40rem" h="100%" />
  </Flex>
)

export default Loading
