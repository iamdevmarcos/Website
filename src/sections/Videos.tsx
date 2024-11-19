import { AspectRatio, Box, Flex, Text } from '@chakra-ui/react'
import { Container, Section } from 'components'
import { YoutubeVideo } from 'types/YoutubeVideo'

const Videos = ({ videos }: { videos: YoutubeVideo[] }) => {
  return (
    <Container>
      <Flex
        as="section"
        aria-label="Videos and Live coding"
        mt={{ base: '6rem', sm: '8rem' }}
        flexDir="column"
        justifyContent="flex-start"
        gap={10}
      >
        <Section heading="Videos and Live Coding">
          <Flex
            flexWrap="wrap"
            gap={{ base: '2.4rem', md: '4rem' }}
            justifyContent="center"
          >
            {videos.map(({ title, video_id }) => (
              <Box
                key={video_id}
                w={{ base: '100%', md: '25rem' }}
                bg="gray.900"
                borderRadius="md"
                overflow="hidden"
                boxShadow="lg"
                p="4"
                border="5px solid #333"
              >
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    title={title}
                    src={`https://www.youtube.com/embed/${video_id}`}
                    allowFullScreen
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  />
                </AspectRatio>

                <Box pt="4">
                  <Text
                    fontWeight="semibold"
                    fontSize="1.3rem"
                    color="white"
                    letterSpacing="-0.8px"
                  >
                    {title}
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Section>
      </Flex>
    </Container>
  )
}

export default Videos
