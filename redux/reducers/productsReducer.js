import {
    FETCH_PRODUCTS
} from '../actions/productsActions'  

const INITIAL_STATE = { products: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state, products: action.payload
            }
        default:
            return state;
    }

}