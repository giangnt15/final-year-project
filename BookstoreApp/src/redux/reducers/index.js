import {
    combineReducers
} from 'redux';
// import bookReducer from './bookReducer';
// import authReducer from './authReducer';
// import cartReducer from './cartReducer';
import userSettingsReducer from './userSettingsReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
    // books: bookReducer,
    userSettings: userSettingsReducer,
    filters: filtersReducer,
    // auth: authReducer,
    // cart: cartReducer
})

export default rootReducer;