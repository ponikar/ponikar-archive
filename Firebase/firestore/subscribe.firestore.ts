import { Firestore } from "../firebase.config"



const FirestoreSubscribeRef = Firestore.collection("/email-subscribers")

export const subscribeForEmail = async (email: string) => {
    return await FirestoreSubscribeRef.add({ email });
}


const FirestoreContactRef = Firestore.collection("/contacts")

export const saveContactDetails = async ({ name, email, message }) => {
     return await FirestoreContactRef.add({ name, email, message });
}