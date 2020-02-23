import gql from 'graphql-tag';

export const GET_REVIEWS_BY_BOOK = gql`
    query getBookReviewsByBook($bookId: ID!, $orderBy: BookReviewOrderByInput, $first: Int,$skip: Int){
        getBookReviewsByBook(bookId: $bookId, orderBy: $orderBy, first: $first, skip: $skip){
            bookReviews{
                id
                reviewHeader
                reviewText
                rating
                createdAt
                updatedAt
                author{
                    id
                    username
                    avatar
                }
            }
            totalCount
            fiveStar
            fourStar
            threeStar
            twoStar
            oneStar
        }
    }
`

export const CREATE_BOOK_REVIEW = gql`
    mutation createBookReview($data: BookReviewCreateInput!){
        createBookReview(data: $data){
            id
        }
    }
`
