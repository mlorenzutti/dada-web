import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import productsReducer from './productsReducer'
import userReducer from './userReducer'
import wishlistReducer from './wishlistReducer'
import articlesReducer from './articlesReducer'

const reducers = {
    productsReducer,
    userReducer,
    wishlistReducer,
    articlesReducer,
    form
}

const rootReducer = combineReducers(reducers)

export default rootReducer