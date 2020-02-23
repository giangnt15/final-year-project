import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  headers: {
    authorization: localStorage.getItem('token')
  }
});

export default client;