import { Flex, Text } from '@chakra-ui/react'

import ProjectLabel from './ProjectLabel'

export type ProjectProps = {
  name: string
  description: string
  githubLink?: string
  npmLink?: string
  previewLink?: string
}

const Project = ({
  name,
  description,
  githubLink,
  npmLink,
  previewLink
}: ProjectProps) => {
  return (
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
        {!!githubLink && <ProjectLabel title="Github" link={githubLink} />}
        {!!npmLink && <ProjectLabel title="NPM" link={npmLink} />}
        {!!previewLink && <ProjectLabel title="Preview" link={previewLink} />}
      </Flex>
    </Flex>
  )
}

export default Project
