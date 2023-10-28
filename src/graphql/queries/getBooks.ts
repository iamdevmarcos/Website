import { gql } from '@apollo/client'

export const GET_BOOKS = /* GraphQL */ gql`
  query getBooks {
    books {
      id
      bookTitle
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
