import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getRepositories {
    user(login: "CrisKLP") {
      repositories(last: 50, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          id
          name
          description
          url
          homepageUrl
          repositoryTopics(last: 10) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
`;
