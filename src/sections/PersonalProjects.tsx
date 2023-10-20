import { Flex } from '@chakra-ui/react'
import { Container, Project, Section } from 'components'
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
      <Section heading="Personal Projects">
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
      </Section>
    </Flex>
  </Container>
)

export default PersonalProjects
