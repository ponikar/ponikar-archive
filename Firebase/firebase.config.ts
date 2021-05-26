import firebaseConfig from "./config.json"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"



if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export const FirebaseAuth = firebase.auth;

export default firebase;
export const Firestore = firebase.firestore();


