import { Firestore } from "../firebase.config"
import firebase from "firebase"
import { fsCreatedTimeStamp } from "./firestore.helper";
import { mapBlogWithTags } from "./tags.firestore";
interface storeBlogProps {
    title: string;
    article: string;
    tags?: string[];
    uid: string;
}


const FirestoreRef = (uid:string) => Firestore.collection(`/user/blogs/${uid}`)

export const storeBlog = async ({ title, article, uid, tags = [] }: storeBlogProps) => {
        try {
            const batch = Firestore.batch();
            const doc =  await FirestoreRef(uid).add({ title, article, tags, ...fsCreatedTimeStamp});
            return await mapBlogWithTags(doc.id, tags, batch);
        } catch(e) {
            console.log("ERROR couldn't store doc", e.message);
        }
}