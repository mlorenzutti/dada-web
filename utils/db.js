import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/storage'
import '@firebase/auth'

var config = {
  apiKey: "AIzaSyDVCZQKtM9dxiUN60Eeq61bea0J5L-3pck",
  authDomain: "dada-ki.firebaseapp.com",
  databaseURL: "https://dada-ki.firebaseio.com",
  projectId: "dada-ki",
  storageBucket: "dada-ki.appspot.com",
  messagingSenderId: "233370791898"
};

export function loadFirebase() {
  try {
    firebase.initializeApp(config);
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase;
}