import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.HYGRAPH_API_HOST,
  documents: 'src/graphql/queries/**.ts',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: []
    }
  }
}

export default config
