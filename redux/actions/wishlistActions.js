import {loadFirebase} from '../../utils/db'

export const FETCH_WISHLIST = 'FETCH_WISHLIST'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'


export const fetchWishlist = (uid) => async dispatch => {
    const fb = await loadFirebase();
  
    fb.firestore().collection('users')
        .document(uid)
        .collection('wishlist')
        .orderBy('saved_on', 'desc')
        .onSnapshot(snapshot => {
  
          let newState = []
  
          snapshot.forEach(function(doc) {
            newState.push({
              id: doc.id,
              post: doc.data()
            });
          });
  
          dispatch({
            type: FETCH_WISHLIST,
            payload: newState
          })
        });
  };