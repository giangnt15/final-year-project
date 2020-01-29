import gql from 'graphql-tag';

export const GET_BOOKS = gql`
  query getBooks($where: BookWhereInput, $orderBy: BookOrderByInput, $first: Int, $skip: Int){
    getBooks(where: $where, orderBy: $orderBy, first: $first, skip: $skip) {
      id
      title
      basePrice
      description
      thumbnail
    }
  }
`;