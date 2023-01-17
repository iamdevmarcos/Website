import { Flex, Image, Link, Text } from '@chakra-ui/react'

export type PostProps = {
  id: number
  canonical_url: string
  cover_image: string
  reading_time_minutes: number
  tag_list: string[]
  title: string
  type_of: string
}

const Post = ({
  title,
  cover_image,
  canonical_url,
  reading_time_minutes,
  tag_list
}: PostProps) => (
  <Link
    href={canonical_url}
    isExternal
    aria-label="Post"
    flexDir="column"
    justifyContent="flex-start"
    gap={10}
    color="white"
    border="0.2rem solid transparent"
    borderRadius="0.5rem"
    transition="all ease-in 0.2s"
    _hover={{
      textDecoration: 'none',
      borderColor: 'white',
      padding: '10px'
    }}
  >
    <Flex gap={10} flexDir={{ base: 'column', md: 'row' }}>
      <Image
        src={cover_image}
        alt={title}
        w={{ base: '100%', md: '27rem' }}
        h="15rem"
        borderRadius="0.2rem"
      />

      <Flex
        flexDir="column"
        alignItems="flex-start"
        justifyContent="space-around"
        color="white"
      >
        <Flex flexWrap="wrap" gap={5} mb={{ base: 5, md: 0 }}>
          {tag_list.map((tag, index) => (
            <Text
              key={index}
              background="black"
              color="white"
              border="0.1rem solid white"
              fontSize="1.3rem"
              fontWeight="light"
              textTransform="capitalize"
              p="0 1rem"
              borderRadius="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {tag}
            </Text>
          ))}
        </Flex>
        <Text
          fontSize={{ base: '2rem', md: '2.4rem' }}
          fontWeight="bold"
          pb={{ base: 5, md: 8 }}
        >
          {title}
        </Text>
        <Text fontSize="1.4rem" fontWeight="light" color="#ccc">
          {reading_time_minutes} min read
        </Text>
      </Flex>
    </Flex>
  </Link>
)

export default Post
