import { Firestore } from "../firebase.config"
import firebase from "firebase"
import { fsCreatedTimeStamp, covertTimeStampToString, mapDocsWithTimeStamps } from "./firestore.helper";
import { mapBlogWithTags } from "./tags.firestore";
import { BlogProps } from "../../src/Context/create-blog.context";
interface storeBlogProps {
    title: string;
    article: string;
    tags?: string[];
    uid?: string;
    description: string;
    preview_image: string;
}



const FirestoreRef = Firestore.collection(`/blogs`)

export const storeBlog = async ({ title, article, tags = [], description, preview_image }: storeBlogProps) => {
        try {
            const batch = Firestore.batch();
            const doc =  await FirestoreRef.add({ title, article, tags, description, preview_image, deleted:false ,...fsCreatedTimeStamp});
            return await mapBlogWithTags(doc.id, tags, batch);
        } catch(e) {
            console.log("ERROR couldn't store doc", e.message);
        }
}

export const getDocumentsByTag = async (tag: string) => {
    try {
       const docs = await (await FirestoreRef.where("tags","array-contains", tag).get()).docs;
    } catch(e) {
        console.log("ERRR", e.message);
    }
}


export const getRecentBlogs = async (limit = 3) :Promise<any> => {
    try {
        const docs = await (await FirestoreRef.orderBy("createdAt", "desc").limit(limit).get()).docs;
        return mapDocsWithTimeStamps(docs);
    } catch(e) {
        throw new Error(e.message);
    }
}

export const getBlogsID = async () => {
    try {
        const docs = await (await FirestoreRef.orderBy("createdAt", "desc").get()).docs;
        return docs.map(doc => ({ params: { blog_id: doc.id } }));
    } catch(e) {
        throw new Error(e.message);
    }
}

export const getBlogByID = async (id) => {
    const doc =  await FirestoreRef.doc(id).get();
    return { id: doc.id, ...doc.data(), ...covertTimeStampToString(doc.data())};
}

export const softDeleteBlog = async (id: string) => {
    return await FirestoreRef.doc(id).update({ deleted: true });
}


interface updateBlogProps {
    title?: string;
    article?: string;
    tags?: string[];
    uid?: string;
    description?: string;
    preview_image?: string;
}

export const updateBlog = async (id :string, props:updateBlogProps) => {
    return await FirestoreRef.doc(id).update(props);
}