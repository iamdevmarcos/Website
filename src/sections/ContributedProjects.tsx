import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import { Container, Project, Section } from 'components'
import { contributedProjects } from 'mocks/projects'

const ContributedProjects = () => (
  <Container>
    <Flex
      as="section"
      aria-label="Blog Posts and Articles"
      mt={{ base: '6rem', sm: '8rem' }}
      flexDir="column"
      justifyContent="flex-start"
      gap={10}
      pb={40}
    >
      <Section heading="Contributions to Open Source Projects">
        {contributedProjects.map(
          ({ name, description, thumbnail, githubLink }, index) => (
            <ChakraLink
              key={index}
              href={githubLink}
              isExternal
              _hover={{
                opacity: '0.7'
              }}
            >
              <Project
                name={name}
                description={description}
                thumbnail={thumbnail}
              />
            </ChakraLink>
          )
        )}
      </Section>
    </Flex>
  </Container>
)

export default ContributedProjects
