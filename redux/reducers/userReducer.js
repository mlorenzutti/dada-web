import {
    FETCH_USER,
    FETCH_ADMINS
} from '../actions/userActions'  

const INITIAL_STATE = { user: null, isAdmin:false }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state, user: action.payload
            }
        case FETCH_ADMINS:
            if (action.payload.indexOf(state.user.uid) > -1){
                return {
                    ...state, isAdmin: true
                }
            }
            return {
                ...state, isAdmin: false
            }
        default:
            return state;
    }

}