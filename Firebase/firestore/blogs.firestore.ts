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


const FirestoreRef = Firestore.collection(`/blogs`)

export const storeBlog = async ({ title, article, tags = [] }: storeBlogProps) => {
        try {
            const batch = Firestore.batch();
            const doc =  await FirestoreRef.add({ title, article, tags, ...fsCreatedTimeStamp});
            return await mapBlogWithTags(doc.id, tags, batch);
        } catch(e) {
            console.log("ERROR couldn't store doc", e.message);
        }
}

export const getDocumentsByTag = async (tag: string) => {
    try {
       const docs = await (await FirestoreRef.where("tags","array-contains", tag).get()).docs;
       console.log("DOCUMENTS" ,docs[0].data());
    } catch(e) {
        console.log("ERRR", e.message);
    }
}

export const getRecentBlogs = async () => {
    try {
        const docs = await (await FirestoreRef.orderBy("createdAt", "desc").limit(3).get()).docs;
        return docs.map(doc => doc.data());
    } catch(e) {
        throw new Error(e.message);
    }
}


export const getBlogsID = async () => {
    try {
        const docs = await (await FirestoreRef.orderBy("createdAt", "desc").get()).docs;
        return docs.map(doc => doc.data().id);
    } catch(e) {
        throw new Error(e.message);
    }
}