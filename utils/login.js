import {loadFirebase} from './db'
import { SubmissionError } from 'redux-form'

export const loginWithGoogle = async () => {
    const firebase = await loadFirebase()
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      });
}

export const loginWithFacebook = async () => {
    const firebase = await loadFirebase()
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result)
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        // ...
      }).catch(function(error) {
        console.log(error)
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        
        // ...
      })
}

export const signupWithEmail = async ({email,password,return_password}) => {
    const firebase = await loadFirebase()
    return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        switch (errorCode){
            case 'auth/email-already-in-use':
                throw new SubmissionError({
                    email: errorMessage,
                    _error: 'Signup failed!'
                })
                break;
            case 'auth/invalid-email':
                throw new SubmissionError({
                    email: errorMessage,
                    _error: 'Signup failed!'
                })
                break;
            case 'auth/weak-password':
                throw new SubmissionError({
                    password: errorMessage,
                    _error: 'Signup failed!'
                })
                break;
            default:
                break;
        }
        // ...
    });
}

export const loginWithEmail = async ({email,password}) => {
    const firebase = await loadFirebase()
    return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        switch (errorCode){
            case 'auth/wrong-password':
                throw new SubmissionError({
                    password: errorMessage,
                    _error: 'Login failed!'
                })
                break;
            case 'auth/account-exists-with-different-credential':
                throw new SubmissionError({
                    email: errorMessage,
                    _error: 'Login failed!'
                })
                break;
            case 'auth/invalid-credential':
                throw new SubmissionError({
                    email: errorMessage,
                    _error: 'Login failed!'
                })
                break;
            case 'auth/operation-not-allowed':
                throw new SubmissionError({
                    email: errorMessage,
                    _error: 'Login failed!'
                })
                break;
            case 'auth/user-disabled':
                throw new SubmissionError({
                    email: errorMessage,
                    _error: 'Login failed!'
                })
                break;
            case 'auth/user-not-found':
                throw new SubmissionError({
                    email: errorMessage,
                    _error: 'Login failed!'
                })
                break;
            default:
                break;
        }
        
        // ...
    });
}

export const logout = async () => {
    const firebase = await loadFirebase()
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
     
    });
}