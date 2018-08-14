import {loadDB} from '../../utils/db'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'


export const fetchProducts = () => async dispatch => {
    const db = await loadDB();
  
    db.firestore().collection('products')
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