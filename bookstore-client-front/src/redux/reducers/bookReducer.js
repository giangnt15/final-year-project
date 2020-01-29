import { GETTING_BOOKS, GET_BOOKS_SUCCESSFULLY } from "../../constants"

let initialState = {
    books: [],
    error: undefined,
    loading: false
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_BOOKS:
            return {
                ...state,
                loading: true
            }
        case GET_BOOKS_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                books: action.books
            }
        case GET_BOOKS_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default bookReducer;