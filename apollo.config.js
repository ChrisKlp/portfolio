module.exports = {
  client: {
    service: {
      name: 'github',
      localSchemaFile: './schema.docs.graphql',
      includes: ['./src/**/*.ts', './src/**/*.tsx'],
      excludes: ['./src/**/*.test.tsx', './src/**/*.test.ts', 'node_modules/*'],
      tagName: 'gql',
    },
  },
};
