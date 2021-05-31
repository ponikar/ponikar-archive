import firebaseConfig from "./config.json"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"



if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export const FirebaseAuth = firebase.auth;
export const FireStorage = firebase.storage();

export default firebase;
export const Firestore = firebase.firestore();


