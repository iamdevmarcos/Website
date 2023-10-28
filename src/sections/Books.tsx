import { Flex } from '@chakra-ui/react'

import { Book, Container, Section } from 'components'
import { type AboutProps } from 'pages/about'

const Books = ({ books }: Pick<AboutProps, 'books'>) => (
  <Container>
    <Flex
      as="section"
      aria-label="Blog Posts and Articles"
      mt="4rem"
      flexDir="column"
      justifyContent="flex-start"
      gap={10}
      pb={60}
    >
      <Section heading="Books that changed my life">
        {books.map((book, index) => (
          <Book key={`Book: ${index}`} {...book} />
        ))}
      </Section>
    </Flex>
  </Container>
)

export default Books
