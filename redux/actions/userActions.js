import {loadFirebase} from '../../utils/db'

export const FETCH_USER = 'FETCH_USER'


export const fetchUser = () => async dispatch => {
    const fb = await loadFirebase();
    fb.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage)
    // ...
    });

    fb.auth().onAuthStateChanged(function(user) {
        if (user && user !== undefined) {
          
          // User is signed in.
          const userPayload = {
              isAnonymous: user.isAnonymous,
              uid: user.uid
          }
          dispatch({
            type: FETCH_USER,
            payload: userPayload
          })
          // ...
        } else {
          // User is signed out.
          // ...
        }
        // ...
      });

}