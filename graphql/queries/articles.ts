import gql from 'graphql-tag';

export const articles = gql`
    query Articles {
        articles {
            documentId
            title
            slug
            blocks {
                __typename
                ... on ComponentSharedRichText {
                    body
                }
            }
            createdAt
            cover {
                width
                height
                url
            }
            category {
                name
                slug
            }
        }
    }
`;
