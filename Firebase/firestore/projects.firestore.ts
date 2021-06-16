import { ProjectProps } from "../../src/Store/Reducers/ponikar/projects/projects.types";
import { Firestore } from "../firebase.config";
import { fsCreatedTimeStamp, getDocuments, mapDocsWithTimeStamps } from "./firestore.helper";
import { storeProjectImages } from "./projects.storage";



const projectRef = Firestore.collection("/projects");


export const storeProject = async (project:ProjectProps) => {
    const images = await storeProjectImages(project.images);
    return await projectRef.add({...project, ...fsCreatedTimeStamp ,images});
}


export const getRecentProjects = async (limit = 5) => {
    const docs = await (await getDocuments(projectRef).limit(limit).get()).docs;
    return mapDocsWithTimeStamps(docs);
}

export const softDeleteProject = (id: string) => {
    return projectRef.doc(id).update({ deleted: true });
}