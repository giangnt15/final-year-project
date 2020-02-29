import gql from 'graphql-tag';

export const GET_BOOKS = gql`
  query getBooks($where: BookWhereInput, $orderBy: BookOrderByInput, $first: Int, $skip: Int, $selection: String){
    getBooks(where: $where, orderBy: $orderBy, first: $first, skip: $skip, selection: $selection) {
      books{
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
      totalCount
    }
  }
`;

export const GET_BOOK_QTY = gql`
  query getItemStockQty($id: ID!){
    getItemStockQty(id: $id){
      id
      qty
    }
  }
`

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