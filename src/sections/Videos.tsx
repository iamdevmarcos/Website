import { AspectRatio, Flex } from '@chakra-ui/react'
import { Container, Section } from 'components'
import { YoutubeVideo } from 'types/YoutubeVideo'

const Videos = ({ videos }: { videos: YoutubeVideo[] }) => {
  return (
    <Container>
      <Flex
        as="section"
        aria-label="Tutorials and Live coding"
        mt={{ base: '6rem', sm: '8rem' }}
        flexDir="column"
        justifyContent="flex-start"
        gap={10}
      >
        <Section heading="Tutorials and Live Coding">
          <Flex flexDir="column" gap={{ base: '2.4rem', md: '6.4rem' }}>
            {videos.map(({ title, video_id }) => (
              <AspectRatio key={video_id} maxW="100%" maxH="45rem" ratio={1}>
                <iframe
                  title={title}
                  src={`https://www.youtube.com/embed/${video_id}`}
                  allowFullScreen
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                />
              </AspectRatio>
            ))}
          </Flex>
        </Section>
      </Flex>
    </Container>
  )
}

export default Videos
