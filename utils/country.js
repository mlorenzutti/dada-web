import Cookie from 'js-cookie'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { setCountry } from '../redux/actions/countryActions'

export const countryList = {
    "es_ES": {
        "name" : "Spain",
        "code" : "es_ES",
        "slug" : "spain"
    },
    "de_DE" : {
        "name" : "Germany",
        "code" : "de_DE",
        "slug" : "germany"
    }
}

export const defaultCountry = countryList.es_ES

export const setCountryCookie = (country) => {
    setCookie(null, 'country', JSON.stringify(country), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    })
}

export const checkCountryCookie = async (ctx,country,store) => {

    

    const cookies = parseCookies(ctx)
    const countryString = cookies.country

    if (!countryString){
        
        setCookie(ctx, 'country', JSON.stringify(country.currentCountry), {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
    }else{
        
        const country = JSON.parse(countryString)
        const setCountryAction = setCountry(country)
        store.dispatch(setCountryAction)
    }

}