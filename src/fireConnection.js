import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCcuOUwVMF4XVjeRRrznYkYmdidqksHfwk",
    authDomain: "autenticacaoteste-e9331.firebaseapp.com",
    databaseURL: "https://autenticacaoteste-e9331.firebaseio.com",
    projectId: "autenticacaoteste-e9331",
    storageBucket: "autenticacaoteste-e9331.appspot.com",
    messagingSenderId: "1064889545374",
    appId: "1:1064889545374:web:fd7fe9ca9c723e957e018f",
    measurementId: "G-499418RXNN"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}   

export default firebase;