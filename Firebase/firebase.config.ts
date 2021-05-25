import config from "./config.json"
import firebase from "firebase"



if(!firebase.apps.length && process.browser) {
    firebase.initializeApp(config);
}


const Provider = new firebase.auth.GoogleAuthProvider()

export const FirebaseAuth =  firebase.auth().signInWithPopup(Provider);
export const Firestore = firebase.firestore();


