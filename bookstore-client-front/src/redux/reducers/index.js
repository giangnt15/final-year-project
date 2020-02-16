import {
    combineReducers
} from 'redux';
import bookReducer from './bookReducer';
import userSettingsReducer from './userSettingsReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
    books: bookReducer,
    userSettings: userSettingsReducer,
    filters: filtersReducer
})

export default rootReducer;