import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  //uri: 'http://localhost:4000/',196.178.18.215
  //uri: 'http://196.178.18.215:4000',
  //uri: 'http://127.0.0.1:4000/',10.0.2.2
  uri: 'http://10.0.2.2:4000/',
  cache: new InMemoryCache(),
});

export default client;
