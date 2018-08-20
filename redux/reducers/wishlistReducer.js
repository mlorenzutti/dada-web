import {
    FETCH_WISHLIST
} from '../actions/wishlistActions'  

const INITIAL_STATE = { products: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_WISHLIST:
            return {
                ...state, products: action.payload
            }
        default:
            return state;
    }

}