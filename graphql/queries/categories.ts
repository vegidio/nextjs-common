import gql from 'graphql-tag';

export const categories = gql`
    query Categories {
        categories {
            documentId
            name
            slug
            description
            createdAt
        }
    }
`;
