import {
    FETCH_USER
} from '../actions/userActions'  

const INITIAL_STATE = { user: null }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state, user: action.payload
            }
        default:
            return state;
    }

}