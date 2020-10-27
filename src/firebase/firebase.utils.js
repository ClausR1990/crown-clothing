import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDYmLYLc9kEgD6d2XQvMyU22AFKR0TbeWw",
    authDomain: "crown-db-793dc.firebaseapp.com",
    databaseURL: "https://crown-db-793dc.firebaseio.com",
    projectId: "crown-db-793dc",
    storageBucket: "crown-db-793dc.appspot.com",
    messagingSenderId: "127079247578",
    appId: "1:127079247578:web:fb29557c26df1f04a83fe3"
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

