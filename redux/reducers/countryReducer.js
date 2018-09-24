import {
    SET_COUNTRY
} from '../actions/countryActions' 

import { defaultCountry } from '../../utils/country'

const INITIAL_STATE = { currentCountry: defaultCountry }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_COUNTRY:
            return {
                ...state, currentCountry: action.payload
            }
        default:
            return state;
    }

}