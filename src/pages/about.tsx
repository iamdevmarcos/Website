import { apolloClient } from 'graphql/apolloClient'
import { GET_BOOKS } from 'graphql/queries/getBooks'

import {
  GetBooksQuery,
  GetBooksQueryVariables
} from 'graphql/generated/graphql'

import Layout from 'components/Layout'
import { AboutMe, Books } from 'sections'
import { type BookProps } from 'components/Book'

export type AboutProps = {
  books: BookProps[]
}

export default function About({ books }: AboutProps) {
  return (
    <Layout>
      <AboutMe />
      <Books books={books} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data } = await apolloClient.query<
    GetBooksQuery,
    GetBooksQueryVariables
  >({ query: GET_BOOKS })

  return {
    props: {
      books: data.books
    }
  }
}
