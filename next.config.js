/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['react-icons'])

module.exports = withTM({
  transpilePackages: ['geist'],
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com'
      }
    ]
  }
})
