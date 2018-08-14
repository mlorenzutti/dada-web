import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import ReduxPromise from 'redux-promise'

export const initStore = initialState => {

    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'stage') {
        return createStore(reducers, initialState, compose(applyMiddleware(thunkMiddleware,ReduxPromise)))
    }else{
        return createStore(
            reducers,
            initialState,
            composeWithDevTools(applyMiddleware(thunkMiddleware,ReduxPromise))
        )
    }
    
}