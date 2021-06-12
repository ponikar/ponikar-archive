import { FireStorage } from "../firebase.config"
import uuid from "react-uuid"


export const uploadImage = async(image:FileList | string) => {
        
    try {
        let blogURL = null;
        if(typeof image === "string") {
            blogURL = await makeBlogUrl(image); 
        } else {
            const url =  URL.createObjectURL(image[0]);
            blogURL = await makeBlogUrl(url);
        }
       
        const imgRef = FireStorage.ref(`/blogs/${uuid()}`);
        await imgRef.put(blogURL);

        const publicURL = await imgRef.getDownloadURL();
        return publicURL;
    } catch(e) {
        throw new Error(e.message);
    }
}

const makeBlogUrl = async url => await(await fetch(url)).blob();   