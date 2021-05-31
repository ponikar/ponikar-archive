import { Firestore } from "../firebase.config"



const FirestoreRef = Firestore.collection("/email-subscribers")

export const subscribeForEmail = async (email: string) => {
    return await FirestoreRef.add({ email });
}