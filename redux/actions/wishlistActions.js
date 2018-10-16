import {loadFirebase} from '../../utils/db'

export const FETCH_WISHLIST = 'FETCH_WISHLIST'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'


export const fetchWishlist = (uid,countryCode) => async dispatch => {
    
    const firebase = await loadFirebase();
    firebase.firestore().collection('users')
        .doc(uid)
        .collection('wishlist')
        .doc(countryCode)
        .collection('products')
        .orderBy("saved_on","desc")
        .get()
        .then(snapshot => {
          
          let promises = []
          snapshot.forEach(function(doc) {
              promises.push(firebase.firestore().collection('sites').doc(countryCode).collection('products').doc(doc.id).get())                
          });
            
          Promise.all(promises).then(values => {
              const newState = []
              values.forEach(function(doc){      
                  if (doc.data()){              
                    newState.push({
                        id: doc.id,
                        post: doc.data()
                    })
                  }
              })    

              dispatch({
                type: FETCH_WISHLIST,
                payload: newState
              }) 
          })
        });
  };

export const removeFromWishlist = (uid,product,countryCode) => async dispatch => {
    const fb = await loadFirebase();
    fb.firestore().collection('users')
        .doc(uid)
        .collection('wishlist')
        .doc(countryCode)
        .collection('products')
        .doc(product.id)
        .delete()
        .then(function() {
          dispatch(fetchWishlist(uid,countryCode))
          dispatch({
            type: REMOVE_PRODUCT
            })
             
        })
        .catch(function(error) {
            console.error("Error deleting document: ", error);
        });
    
}

export const addToWishlist = (uid,product,countryCode) => async dispatch => {
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
        .doc(countryCode)
        .collection('products')
        .doc(product.id).set(productPost)
    .then(function() {
      dispatch(fetchWishlist(uid,countryCode))
      dispatch({
        type: ADD_PRODUCT
        })
         
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
 
}