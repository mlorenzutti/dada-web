export const AMAZON_TAG = '?tag=kidada0b-21'
export const currencySymbol = (currencyCountry) => {
    console.log(currencyCountry)
    switch (currencyCountry){
        case 'EUR':
            return '€ ';
        case 'GBP':
            return '£';
        case 'USD':
            return '$';
        default:
            return ''; 
    }
}