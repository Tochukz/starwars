import { GraphQLClient } from 'graphql-request';

export const Query = async function(query: string) {
  /* Todo: Make Url change based on environment */
  //let url = 'http://localhost:8000/graphql'  // For Dev env
  let url = '/graphql'; // For live env
  
  const client = new GraphQLClient(url, {
    headers: {}
  });
  const response = client.request(query);
  return response;
}
