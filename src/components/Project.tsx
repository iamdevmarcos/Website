import { Center, Flex, Text, Image } from '@chakra-ui/react'

import ProjectLabel from './ProjectLabel'

export type ProjectProps = {
  name: string
  description: string
  githubLink?: string
  npmLink?: string
  previewLink?: string
  thumbnail?: string
}

const Project = ({
  name,
  description,
  githubLink,
  npmLink,
  previewLink,
  thumbnail
}: ProjectProps) => {
  return (
    <Flex gap="2rem">
      {!!thumbnail && (
        <Center
          mb={5}
          w="8rem"
          h="8rem"
          p="6px"
          border={{ base: 'none', lg: '0.1rem solid gray' }}
          borderRadius="50%"
          display={{ base: 'none', lg: 'block' }}
        >
          <Image src={thumbnail} alt={name} borderRadius="50%" />
        </Center>
      )}

      <Flex
        flexDir="column"
        alignItems="flex-start"
        justifyContent="space-around"
        color="white"
      >
        <Text fontSize={{ base: '2rem', md: '2.4rem' }} fontWeight="bold">
          {name}
        </Text>

        <Text fontSize="1.4rem" fontWeight="light" color="#ccc" mb={5}>
          {description}
        </Text>

        <Flex gap={5} flexWrap="wrap">
          {!!githubLink && (
            <ProjectLabel
              title="Github"
              link={githubLink}
              ariaLabel="Github Link"
            />
          )}

          {!!npmLink && (
            <ProjectLabel title="NPM" link={npmLink} ariaLabel="NPM Link" />
          )}

          {!!previewLink && (
            <ProjectLabel
              title="Preview"
              link={previewLink}
              ariaLabel="Preview Link"
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Project
