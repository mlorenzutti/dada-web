import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SYNC
} from '../actions/productsActions'  

const INITIAL_STATE = { products: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SYNC:
            return {
                ...state, products: action.payload
            }
        case FETCH_PRODUCTS:
            return {
                ...state, products: action.payload
            }
        default:
            return state;
    }

}