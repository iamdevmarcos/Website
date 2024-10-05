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
  'I’m a software engineer with a passion for understanding how things work and building intuitive, high-performance web applications, mobile apps, and backend services.',
  'My expertise covers technologies such as TypeScript, React, Node.js, Java, Spring Boot, AWS, Azure DevOps, React Native, and Swift. I enjoy diving into the inner workings of these technologies to create practical, scalable solutions that solve real-world problems.',
  'I implement Clean Architecture, SOLID principles, and Design Patterns to ensure well-structured, maintainable systems that are easy to scale. Whether working on the frontend or backend, I always strive to balance performance, usability, and flexibility in every project.',
  'With a strong focus on frontend development, I specialize in crafting responsive, user-centric interfaces that prioritize both design and performance. On the backend, my experience with APIs and microservices allows me to develop robust, scalable systems that seamlessly integrate across platforms.',
  'I take pride in writing clean, maintainable code and ensuring an exceptional user experience. My problem-solving approach is rooted in continuous learning and a passion for innovative solutions that deliver the best results for businesses and users alike.',
  'Driven by curiosity and a desire for constant improvement, I’m always eager to embrace new challenges and technologies that push me to grow both personally and professionally.',
  'My hobbies are reading, running, and playing on my PlayStation 5.'
]
