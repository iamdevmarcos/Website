import {
  Flex,
  Image,
  Text,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { Container, Heading } from 'components'

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <Text fontSize={{ base: '1.5rem', sm: '1.8rem' }}>{children}</Text>
)

const ExternalLink = ({ title, href }: { title: string; href: string }) => (
  <Link
    href={href}
    isExternal
    textDecor="underline"
    textUnderlineOffset={5}
    color="#00CCFF"
  >
    {title}
  </Link>
)

const AboutMe = () => {
  const colors = {
    textColor: useColorModeValue('black', 'white')
  }

  return (
    <Container>
      <Flex
        as="main"
        aria-label="About me"
        mt={{ base: '6rem', sm: '8rem' }}
        flexDir="column"
        justifyContent="flex-start"
        gap={10}
      >
        <Heading title="About Me" />

        <Flex flexDir="column" gap={5} color={colors.textColor}>
          <Flex alignItems="center" gap={3}>
            <Image
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              alt="hand waving icon"
              width="3rem"
              height="3rem"
            />

            <Paragraph>{"Hey, I'm Marcos!"}</Paragraph>
          </Flex>

          <Paragraph>
            I’m a creative developer with a passion for good design and
            intuitive, user friendly interfaces. I love working on the front
            end, whether that’s creating a beautiful and performant mobile apps
            or using React and TypeScript to create interactive and responsive
            web apps.
          </Paragraph>

          <Paragraph>
            I’m a great team player and communicator, I love challenges and
            problem solving, thinking analytically and valuing code quality and
            user experience.
          </Paragraph>

          <Paragraph>
            Usability and design are always on my mind, even when writing code:
            this should be usable, readable and beautiful too.
          </Paragraph>

          <Paragraph>
            Creating and developing applications that are not only beautiful,
            but pleasant to use and really problem-solving.
          </Paragraph>

          <Paragraph>
            Always writing not just maintainable and scalable software, but also
            the readable code that will make the scalability and maintainability
            possible.
          </Paragraph>
          <Paragraph>
            Helping companies build complex Web and Mobile applications that
            serve users around the world with React and modern technologies.
          </Paragraph>
        </Flex>
      </Flex>

      <Flex
        as="section"
        aria-label="About me"
        mt="4rem"
        flexDir="column"
        justifyContent="flex-start"
        gap={10}
      >
        <Heading title="Links" />

        <UnorderedList
          fontSize={{ base: '1.5rem', sm: '1.8rem' }}
          color={colors.textColor}
          spacing={5}
        >
          <ListItem>
            <ExternalLink
              title="Download CV"
              href={
                'https://drive.google.com/file/d/1TRdBYXrghMMBjSODwkbh-02eEovljvBx/view?usp=sharing'
              }
            />
          </ListItem>

          <ListItem>
            <ExternalLink
              title="Github"
              href="https://github.com/iamdevmarcos"
            />
          </ListItem>

          <ListItem>
            <ExternalLink
              title="LinkedIn"
              href="https://www.linkedin.com/in/iamdevmarcos/"
            />
          </ListItem>

          <ListItem>
            <ExternalLink
              title="Instagram"
              href="https://www.instagram.com/marcosdev.me/"
            />
          </ListItem>

          <ListItem>
            <ExternalLink title="Dev.to" href="https://dev.to/iamdevmarcos" />
          </ListItem>

          <ListItem>
            <ExternalLink title="E-mail" href="mailto:marcosdev.me@gmail.com" />
          </ListItem>
        </UnorderedList>
      </Flex>
    </Container>
  )
}

export default AboutMe
