import { GETTING_BOOKS, GET_BOOKS_SUCCESSFULLY, GET_BOOKS_FAILED, GETTING_BOOK, GET_BOOK_SUCCESSFULLY, GET_BOOK_FAILED } from "../../constants";
import { GET_BOOKS } from "../../api/bookApi";

const gettingBooks = () => ({
    type: GETTING_BOOKS
})

const getBooksSuccessfully = (books) => ({
    type: GET_BOOKS_SUCCESSFULLY,
    books
})

const getBooksFailed = (error) => ({
    type: GET_BOOKS_FAILED,
    error
});

export const getBooks = (client, { where, orderBy, skip, first }) => {
    return async dispatch => {
        dispatch(gettingBooks())
        console.log(client)
        try {
            const res = await client.query({
                query: GET_BOOKS,
                variables: {
                    where,
                    orderBy,
                    skip,
                    first
                }
            })
            dispatch(getBooksSuccessfully(res.data.getBooks))
        } catch (error) {
            dispatch(getBooksFailed(error))
        }
    }
}
