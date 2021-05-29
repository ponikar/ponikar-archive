import { Firestore } from "../firebase.config"

interface storeBlogProps {
    title: string;
    article: string;
    tags?: string[];
    uid: string;
}


const FirestoreRef = (uid:string) => Firestore.collection(`/blogs/${uid}`);

export const storeBlog = async ({ title, article, uid, tags = [] }: storeBlogProps) => {
    try {
        const doc = await FirestoreRef(uid).add({ title, article, tags });
        console.log("document found", doc);
    } catch(e) {
        console.log("Something went wrong", e.message);
    }
}