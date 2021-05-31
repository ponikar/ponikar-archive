import { Firestore } from "../firebase.config"
import firebase from "firebase"
import "firebase/firestore"

const { firestore: { FieldValue: { arrayUnion } } } = firebase;

const FireStoreRef = Firestore.collection(`/tags`);


export const mapBlogWithTags = async (blogID:string, tags: string[], batch?: firebase.firestore.WriteBatch) => {
    tags.forEach(async tag => {
        await FireStoreRef.doc(tag.toLocaleLowerCase())
        .set({ blogs: arrayUnion(blogID)}, { merge: true });
    });
    batch && await batch.commit();
}