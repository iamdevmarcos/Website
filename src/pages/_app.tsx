import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { GeistSans } from 'geist/font'

import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { apolloClient } from 'graphql/apolloClient'
import theme from 'styles/theme'
import { QueryClient, QueryClientProvider } from 'react-query'

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider resetCSS theme={theme}>
          <NextNProgress
            color="#101828"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />

          <Head>
            <title>Marcos Mendes ⚡️</title>
            <link rel="shortcut icon" href="/favicon.png" />
            <link rel="apple-touch-icon" href="/favicon.png" />
            <link rel="icon" type="image/x-icon" href="/favicon.png" />
            <meta
              name="description"
              content="Marcos Mendes - Software Engineer and Open Source Advocate"
            />
          </Head>

          <main className={GeistSans.className}>
            <Component {...pageProps} />
          </main>
        </ChakraProvider>
      </ApolloProvider>
    </QueryClientProvider>
  )
}

export default App
