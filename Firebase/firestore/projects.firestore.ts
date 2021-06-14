import { ProjectProps } from "../../src/Store/Reducers/ponikar/projects/projects.types";
import { Firestore } from "../firebase.config";
import { fsCreatedTimeStamp, mapDocsWithTimeStamps } from "./firestore.helper";
import { storeProjectImages } from "./projects.storage";



const projectRef = Firestore.collection("/projects");


export const storeProject = async (project:ProjectProps) => {
    const images = await storeProjectImages(project.images);
    return await projectRef.add({...project, ...fsCreatedTimeStamp ,images});
}


export const getRecentProjects = async (limit = 5) => {
    const docs = await (await projectRef
                    .limit(limit).get()).docs;
    return docs.map(doc => doc.data());
}