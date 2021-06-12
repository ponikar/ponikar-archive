import { ProjectProps } from "../../pages/ponikar/create-project";
import { Firestore } from "../firebase.config";
import { storeProjectImages } from "./projects.storage";



const projectRef = Firestore.collection("/projects");


export const storeProject = async (project:ProjectProps) => {
    const images = await storeProjectImages(project.images);
    return await projectRef.add({...project, images});
}