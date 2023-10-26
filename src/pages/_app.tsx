import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import { ChakraProvider } from '@chakra-ui/react'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
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

      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
