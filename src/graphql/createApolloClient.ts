import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const createApolloClient = () => {
  const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => alert(`Graphql Error ${message}`));
    }
    if (networkError?.message) {
      alert(`Network Error ${networkError.message}`);
    }
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    return forward(operation);
  });

  const link = from([authMiddleware, errorLink, httpLink]);

  return new ApolloClient<NormalizedCacheObject>({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
};

export default createApolloClient;
