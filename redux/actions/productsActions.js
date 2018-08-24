import {loadFirebase} from '../../utils/db'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SYNC = 'FETCH_PRODUCTS_SYNC'

export const fetchProductsSync = (firebase) => {
  return {
      type: 'FETCH_PRODUCTS_SYNC',
      payload: firebase.firestore().collection('products').orderBy('added_on', 'desc').get()
  }
}


export const fetchProducts = () => async dispatch => {
    const fb = await loadFirebase();
  
    fb.firestore().collection('products')
        .orderBy('added_on', 'desc')
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