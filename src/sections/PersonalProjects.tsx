import { Flex } from '@chakra-ui/react'
import { Container, Heading, Project } from 'components'
import { personalProjects } from 'mocks/projects'

const PersonalProjects = () => (
  <Container>
    <Flex
      as="section"
      aria-label="Blog Posts and Articles"
      mt={{ base: '6rem', sm: '8rem' }}
      flexDir="column"
      justifyContent="flex-start"
      gap={10}
    >
      <Heading title="Personal Projects" />

      {personalProjects.map((item, index) => (
        <Project
          key={index}
          name={item.name}
          description={item.description}
          githubLink={item.githubLink}
          npmLink={item.npmLink}
          previewLink={item.previewLink}
        />
      ))}
    </Flex>
  </Container>
)

export default PersonalProjects
