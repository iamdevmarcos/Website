import { Flex, Text, Link } from '@chakra-ui/react'
import Image from 'next/image'

export type BookProps = {
  bookTitle: string
  bookAuthor: string
  bookPurchaseLink: {
    en: string
    ptBr: string
  }
  bookThumbnail: {
    width: number
    height: number
    mimeType: string
    url: string
  }
}

const Book = ({
  bookTitle,
  bookAuthor,
  bookThumbnail,
  bookPurchaseLink
}: BookProps) => (
  <Flex gap="2rem" flexDir={{ base: 'column', sm: 'row' }}>
    <Flex
      p="0.6rem"
      maxW={{ base: '100%', sm: '14.8rem' }}
      h={{ base: 'auto', sm: '22.5rem' }}
      bg="transparent"
      border="0.1rem solid gray"
    >
      <Image
        alt={bookTitle}
        src={bookThumbnail.url}
        width={bookThumbnail.width}
        height={bookThumbnail.height}
      />
    </Flex>

    <Flex
      flexDir="column"
      gap="0.8rem"
      alignItems={{ base: 'center', sm: 'flex-start' }}
      textAlign={{ base: 'center', sm: 'left' }}
    >
      <Text
        color="white"
        fontWeight="bold"
        fontSize={{ base: '2rem', md: '2.4rem' }}
      >
        {bookTitle}
      </Text>

      <Flex gap="0.4rem" flexWrap="wrap">
        <Text
          color="#ccc"
          fontSize="1.4rem"
          display={{ base: 'none', sm: 'block' }}
        >
          Author:
        </Text>
        <Text fontSize="1.4rem" color="white">
          {bookAuthor}
        </Text>
      </Flex>

      <Flex flexDir="column">
        <Text fontSize="1.4rem" color="#ccc" fontWeight="light">
          Buy this book:
        </Text>

        <Flex gap="0.8rem">
          <Link
            isExternal
            href={bookPurchaseLink.en}
            fontSize="4rem"
            _hover={{
              opacity: '0.7'
            }}
          >
            🇺🇸
          </Link>

          <Link
            isExternal
            href={bookPurchaseLink.ptBr}
            fontSize="4rem"
            _hover={{
              opacity: '0.7'
            }}
          >
            🇧🇷
          </Link>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
)

export default Book
