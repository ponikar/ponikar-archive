import { FireStorage } from "../firebase.config"
import uuid from "react-uuid"


export const uploadImage = async(files:FileList) => {
    
    try {
        const url =  URL.createObjectURL(files[0]);

        const blogURL = await (await fetch(url)).blob();    
        const imgRef = FireStorage.ref(`/blogs/${uuid()}`);
        await imgRef.put(blogURL);

        const publicURL = await imgRef.getDownloadURL();
        return publicURL;
    } catch(e) {
        throw new Error(e.message);
    }
}