/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['react-icons'])

module.exports = withTM({
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
})
