import { ProjectProps } from "../../src/Store/Reducers/ponikar/projects/projects.types";
import { Firestore } from "../firebase.config";
import { fsCreatedTimeStamp, getDocuments, mapDocsWithTimeStamps, mapSingleDocWithTimeStamps } from "./firestore.helper";
import { storeProjectImages } from "./projects.storage";



const projectRef = Firestore.collection("/projects");


export const storeProject = async (project:ProjectProps) => {
    const images = await storeProjectImages(project.images);
    return await projectRef.add({...project, ...fsCreatedTimeStamp ,images});
}


export const getRecentProjects = async (limit = 5) :Promise<any> => {
    const docs = await (await getDocuments(projectRef).limit(limit).get()).docs;
    return mapDocsWithTimeStamps(docs);
}

export const softDeleteProject = (id: string) => {
    return projectRef.doc(id).update({ deleted: true });
}

export const updateProject = (id: string, project) => {
    return projectRef.doc(id).update({ ...project });
}

export const getProjectFirestore = async (id) :Promise<any> => {
    const doc = await projectRef.doc(id).get();
    return mapSingleDocWithTimeStamps(doc);
}

export const getProjectsID = async () => {
    const projects = (await projectRef.get()).docs;
    return projects.map(p => ({ params: { project_id: p.id } }));
}
