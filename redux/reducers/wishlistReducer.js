import {
    FETCH_WISHLIST,
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from '../actions/wishlistActions'  

const INITIAL_STATE = { products: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_WISHLIST:
            return {
                ...state, products: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state
            }
        case REMOVE_PRODUCT:
            return {
                ...state
            }
        default:
            return state;
    }

}