import {loadFirebase} from '../../utils/db'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SYNC = 'FETCH_PRODUCTS_SYNC'

export const fetchProductsSync = (firebase,countryCode) => {
  return {
      type: 'FETCH_PRODUCTS_SYNC',
      payload: firebase.firestore().collection('sites').doc(countryCode).collection('featured_feed').orderBy('featured_on', 'desc').get()
  }
}


export const fetchProducts = (countryCode) => async dispatch => {
    const firebase = await loadFirebase();
  
    firebase.firestore().collection('sites').doc(countryCode).collection('featured_feed')
        .orderBy('featured_on', 'desc')
        .onSnapshot(snapshot => {
          let newState = []
          snapshot.forEach(function(doc) {
            newState.push({
              id: doc.id,
              post: doc.data()
            });
          });
          dispatch({
            type: FETCH_PRODUCTS,
            payload: newState
          })
        });
};