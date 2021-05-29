import { Firestore } from "../firebase.config"
import firebase from "firebase"
interface storeBlogProps {
    title: string;
    article: string;
    tags?: string[];
    uid: string;
}


const FirestoreRef = (uid:string) => Firestore.collection(`/user/blogs/${uid}`)

export const storeBlog = async ({ title, article, uid, tags = [] }: storeBlogProps) :Promise<firebase.firestore.DocumentData> => {
        return FirestoreRef(uid).add({ title, article, tags });
}