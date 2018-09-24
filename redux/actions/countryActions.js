export const SET_COUNTRY = 'SET_COUNTRY'

import {setCountryCookie} from '../../utils/country'

export const setCountry = (country) => async dispatch => {

    if (process.browser){
        setCountryCookie(country)
    }

    dispatch({
        type: SET_COUNTRY,
        payload: country
    })
}