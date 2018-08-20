import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'

var config = {
  apiKey: "AIzaSyDKM3Tjm7aGKUx86JrNXTVt7zcZ4-0R1Bk",
  authDomain: "dada-ism.firebaseapp.com",
  databaseURL: "https://dada-ism.firebaseio.com",
  projectId: "dada-ism",
  storageBucket: "dada-ism.appspot.com",
  messagingSenderId: "632379132030"
};

export function loadFirebase() {
  try {
    firebase.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase;
}