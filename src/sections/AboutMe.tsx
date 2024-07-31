import {
  Flex,
  Image,
  Text,
  Link,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { Container, Section } from 'components'

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

const AboutMe = () => (
  <Container>
    <Flex
      as="main"
      aria-label="About me"
      mt={{ base: '6rem', sm: '8rem' }}
      flexDir="column"
      justifyContent="flex-start"
      gap={10}
    >
      <Section heading="About Me">
        <Flex flexDir="column" gap={5} color="white">
          <Flex alignItems="center" gap={3}>
            <Image
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              alt="hand waving icon"
              width="3rem"
              height="3rem"
            />

            <Paragraph>{"Hey, I'm Marcos!"}</Paragraph>
          </Flex>

          {paragraphs.map((item) => (
            <Paragraph key={`Paragraph - ${item}`}>{item}</Paragraph>
          ))}
        </Flex>
      </Section>
    </Flex>

    <Flex
      as="section"
      aria-label="About me"
      mt="4rem"
      flexDir="column"
      justifyContent="flex-start"
      gap={10}
    >
      <Section heading="Links">
        <UnorderedList
          fontSize={{ base: '1.5rem', sm: '1.8rem' }}
          color="white"
          spacing={5}
        >
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
              href="https://www.instagram.com/mendes.tsx"
            />
          </ListItem>

          <ListItem>
            <ExternalLink title="Dev.to" href="https://dev.to/iamdevmarcos" />
          </ListItem>

          <ListItem>
            <ExternalLink title="E-mail" href="mailto:marcosdev.me@gmail.com" />
          </ListItem>
        </UnorderedList>
      </Section>
    </Flex>
  </Container>
)

export default AboutMe

const paragraphs = [
  "I'm a software engineer, and I have a passion for unraveling how things work. My focus is on technologies like TypeScript, React, Next.js, Node.js, Java, Spring Boot, and PostgreSQL.",
  'I love delving into the inner workings of applications, combining my love for writing code with an insatiable curiosity about the underlying mechanics of these technologies. My experience in these fields makes me a valuable asset to any development team.',
  'I have the ability to translate complex concepts into practical and effective solutions. My problem-solving approach is rooted in continuous learning, which allows me to tackle development challenges with confidence and innovation.',
  'I’m a creative developer with a passion for good design and intuitive, user-friendly interfaces. I love working on the front end, whether that’s creating beautiful and performant mobile apps or using React and TypeScript to create interactive and responsive web apps.',
  'I’m a great team player and communicator, I love challenges and problem-solving, thinking analytically, and valuing code quality and user experience.',
  'Usability and design are always on my mind, even when writing code: this should be usable, readable, and beautiful too.',
  'Creating and developing applications that are not only beautiful, but pleasant to use and really problem-solving.',
  'My hobbies are reading, running, and playing on my PlayStation 5.'
]
