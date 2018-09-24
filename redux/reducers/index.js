import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import productsReducer from './productsReducer'
import userReducer from './userReducer'
import wishlistReducer from './wishlistReducer'
import articlesReducer from './articlesReducer'
import countryReducer from './countryReducer'

const reducers = {
    productsReducer,
    userReducer,
    wishlistReducer,  
    articlesReducer,
    countryReducer,
    form
}

const rootReducer = combineReducers(reducers)

export default rootReducer