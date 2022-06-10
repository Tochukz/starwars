import { GraphQLClient } from 'graphql-request';

export const Query = async function(query: string) {
  const client = new GraphQLClient('http://localhost:8000/graphql', {
    headers: {}
  });
  const response = client.request(query);
  return response;
}
