import {loadFirebase} from '../../utils/db'

export const FETCH_USER = 'FETCH_USER'
export const FETCH_ADMINS = 'FETCH_ADMINS'


export const fetchUser = () => async dispatch => {
    const fb = await loadFirebase();

    fb.auth().onAuthStateChanged(function(user) {
        
        if (user && user !== undefined) {
          // User is signed in.
          const userPayload = {
              isAnonymous: user.isAnonymous,
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              phoneNumber: user.phoneNumber
          }
          dispatch({
            type: FETCH_USER,
            payload: userPayload
          })
          //get admins
          fb.firestore().collection('admins').get().then(snapshot => {
            const admins = []
            snapshot.forEach((docRef) => {
              admins.push(docRef.id)
            })
            dispatch({
              type: FETCH_ADMINS,
              payload: admins
            })
          })
          // Check if user has an entry in firebase
          fb.firestore().collection('users').doc(user.uid).get().then((snapshot) => {
            console.log(snapshot.data())
            //console.log(snapshot.data().saved_on)
            if (!snapshot.data()){
              fb.firestore().collection('users').doc(user.uid).set({
                ...userPayload,
                saved_on: fb.firestore.FieldValue.serverTimestamp()
              })
            }else{
              fb.firestore().collection('users').doc(user.uid).set({
                ...userPayload,
                saved_on: snapshot.data().saved_on
              })
            }
          })
          // ...
        } else {
          console.log('user not signed')
          fb.auth().signInAnonymously().catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
        }
        // ...
      });

}