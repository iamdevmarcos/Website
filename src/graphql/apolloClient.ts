import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: process.env.HYGRAPH_API_HOST,
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
  headers: {
    authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`
  },
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    }
  }
})
