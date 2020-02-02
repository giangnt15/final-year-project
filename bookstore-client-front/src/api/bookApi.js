import gql from 'graphql-tag';

export const GET_BOOKS = gql`
  query getBooks($where: BookWhereInput, $orderBy: BookOrderByInput, $first: Int, $skip: Int){
    getBooks(where: $where, orderBy: $orderBy, first: $first, skip: $skip) {
      id
      title
      basePrice
      description
      thumbnail
      images
      dimensions
      translator
      format
      isbn
      publishedDate
      availableCopies
      pages
      publisher{
        id
        name
      }
      authors{
        id
        pseudonym
      }
      categories{
        id
        name
      }
    }
  }
`;

export const GET_BOOK = gql`
  query getBook($id: ID!){
    getBook(id: $id) {
      id
      title
      basePrice
      description
      thumbnail
      images
      dimensions
      translator
      format
      isbn
      publishedDate
      availableCopies
      pages
      publisher{
        id
        name
      }
      authors{
        id
        pseudonym
      }
      categories{
        id
        name
      }
    }
  }
`;