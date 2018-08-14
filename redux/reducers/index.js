import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import productsReducer from './productsReducer'

const reducers = {
    productsReducer,
    form
}

const rootReducer = combineReducers(reducers)

export default rootReducer