import { gql } from '@apollo/client'

export const GET_BOOKS = /* GraphQL */ gql`
  query getBooks {
    books(orderBy: bookTitle_ASC) {
      id
      bookTitle
      bookAuthor
      bookThumbnail {
        width
        height
        mimeType
        url
      }
      bookPurchaseLink
    }
  }
`
