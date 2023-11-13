import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { GeistSans } from 'geist/font'

import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { apolloClient } from 'graphql/apolloClient'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
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
          <title>
            Marcos Mendes - Software Engineer and Open Source Advocate
          </title>
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
          <meta name="description" content="My personal website" />
        </Head>

        <main className={GeistSans.className}>
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
