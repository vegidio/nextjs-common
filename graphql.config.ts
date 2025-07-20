import type { CodegenConfig } from '@graphql-codegen/cli';

const typeConfig = {
    maybeValue: 'T | undefined',
};

const config: CodegenConfig = {
    schema: 'https://clever-fish-045791bdd9.strapiapp.com/graphql',
    documents: ['graphql/queries/*.ts', 'graphql/mutations/*.ts'],
    generates: {
        'graphql/graphql.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-generic-sdk'],
            config: { ...typeConfig },
        },
    },
};

export default config;
