import {loadFirebase} from '../../utils/db'

export const FETCH_WISHLIST = 'FETCH_WISHLIST'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'


export const fetchWishlist = (uid) => async dispatch => {
    const fb = await loadFirebase();
    console.log(uid)
    fb.firestore().collection('users')
        .doc(uid)
        .collection('wishlist')
        .orderBy("saved_on","desc")
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

export const removeFromWishlist = (uid,product) => async dispatch => {
    const fb = await loadFirebase();
    fb.firestore().collection('users')
        .doc(uid)
        .collection('wishlist')
        .doc(product.id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
          dispatch({
            type: REMOVE_PRODUCT
            })
        })
        .catch(function(error) {
            console.error("Error deleting document: ", error);
        });
    
}

export const addToWishlist = (uid,product) => async dispatch => {
    const fb = await loadFirebase();
    const productPost = {
      'image': product.post.image,
      'brand': product.post.brand,
      'amazon_link': product.post.amazon_link,
      'name': product.post.name,
      'price': product.post.price,
      // replace with Firestore server timestamp when implemented in Flutter
      'saved_on': Date.now(),
    }
    fb.firestore().collection('users')
        .doc(uid)
        .collection('wishlist')
        .doc(product.id).set(productPost)
    .then(function() {
      console.log("Document successfully written!");
      dispatch({
        type: ADD_PRODUCT
        })
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
 
}