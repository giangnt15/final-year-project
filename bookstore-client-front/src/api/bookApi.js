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

export const ADD_BOOK_TO_WISH_LIST = gql`
  mutation addBookToWishList($bookId: ID!){
    addBookToWishList(bookId: $bookId){
      statusCode
      message
    }
  }
`

export const REMOVE_BOOK_FROM_WISH_LIST = gql`
  mutation removeBookFromWishList($bookId: ID!){
    removeBookFromWishList(bookId: $bookId){
      statusCode
      message
    }
  }
`

export const GET_WISH_LIST = gql`
  query getWishList{
    getWishList{
      statusCode
      message
      data{
        books{
          id
          thumbnail
          title
          reviews{
            id
            rating
          }
        }
        totalCount
      }
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