import { FILTER_TYPE_CAT, FILTER_TYPE_PRICE, FILTER_TYPE_AUTHOR, FILTER_TYPE_PUBLISHER, RESET_FILTERS, APPLY_FILTERS, RESET_FILTERS_TEMP, FILTER_TYPE_RATING } from "../../constants"
import _ from 'lodash';

const initialState = {
    category: undefined,
    categoryTemporary: undefined,
    price: undefined,
    priceTemporary: undefined,
    author: undefined,
    authorTemporary: undefined,
    publisher: undefined,
    publisherTemporary: undefined,
    rating: undefined,
    ratingTemporary: undefined
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_TYPE_CAT:
            if (action.isTemporary) {
                return {
                    ...state,
                    categoryTemporary: action.value !== state.categoryTemporary ? action.value : undefined
                }
            }
            return {
                ...state,
                category: action.value !== state.category ? action.value : undefined,
                categoryTemporary: action.value !== state.categoryTemporary ? action.value : undefined
            }
        case FILTER_TYPE_PRICE:
            if (action.isTemporary) {
                return {
                    ...state,
                    priceTemporary: action.value?.id !== state.priceTemporary?.id ? action.value : undefined
                }
            }
            return {
                ...state,
                price: action.value?.id !== state.price?.id ? action.value : undefined,
                priceTemporary: action.value?.id !== state.priceTemporary?.id ? action.value : undefined
            }
        case FILTER_TYPE_AUTHOR:
            if (action.isTemporary) {
                return {
                    ...state,
                    authorTemporary: action.value !== state.authorTemporary ? action.value : undefined
                }
            }
            return {
                ...state,
                author: action.value !== state.author ? action.value : undefined,
                authorTemporary: action.value !== state.authorTemporary ? action.value : undefined
            }
        case FILTER_TYPE_PUBLISHER:
            if (action.isTemporary) {
                return {
                    ...state,
                    publisherTemporary: action.value !== state.publisherTemporary ? action.value : undefined
                }
            }
            return {
                ...state,
                publisher: action.value !== state.publisher ? action.value : undefined,
                publisherTemporary: action.value !== state.publisherTemporary ? action.value : undefined
            }
        case FILTER_TYPE_RATING:
            if (action.isTemporary) {
                return {
                    ...state,
                    ratingTemporary: action.value !== state.ratingTemporary ? action.value : undefined
                }
            }
            return {
                ...state,
                rating: action.value !== state.rating ? action.value : undefined,
                ratingTemporary: action.value !== state.ratingTemporary ? action.value : undefined
            }
        case RESET_FILTERS:
            return initialState;
        case RESET_FILTERS_TEMP:
            return {
                ...state,
                categoryTemporary: undefined,
                priceTemporary: undefined,
                authorTemporary: undefined,
                publisherTemporary: undefined,
                ratingTemporary: undefined
            };
        case APPLY_FILTERS:
            return {
                ...state,
                category: state.categoryTemporary,
                price: state.priceTemporary,
                author: state.authorTemporary,
                publisher: state.publisherTemporary,
                rating: state.ratingTemporary
            };
        default:
            return state;
    }
}