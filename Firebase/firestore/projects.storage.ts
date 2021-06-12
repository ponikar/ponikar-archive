import { FireStorage } from "../firebase.config"
import uuid from "react-uuid"
import { makeBlogUrl } from "./blogs.storage"



export const storeProjectImages = async (images: string[]) => {
    try {
        const result = []
        for(let i = 0; i < images.length; i++) {
            const projectRef = FireStorage.ref(`/projects/${uuid()}`);
            const url = await makeBlogUrl(images[i]);
            await projectRef.put(url);
            const publicURL = await projectRef.getDownloadURL();
            result.push(publicURL);
        }
        
        return result;
    } catch(e) {
        throw new Error(e.message);
    }
}