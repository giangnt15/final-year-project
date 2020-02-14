import {
    combineReducers
} from 'redux';
import bookReducer from './bookReducer';
import userSettingsReducer from './userSettingsReducer';

const rootReducer = combineReducers({
    books: bookReducer,
    userSettings: userSettingsReducer
})

export default rootReducer;