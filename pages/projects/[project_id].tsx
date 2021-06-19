import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { getProjectFirestore, getProjectsID } from "../../Firebase/firestore/projects.firestore";
import { ProjectProps } from "../../src/Store/Reducers/ponikar/projects/projects.types";


interface ProjectPageProps {
    project?: ProjectProps
}


const Project:FC<ProjectPageProps> = ({ project }) => {
    return <div />;
}

export default Project;


export const getStaticPaths: GetStaticPaths = async context => {
    const paths = await getProjectsID();
    return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps = async context => {
     const { params: { project_id } } = context;
     const project = getProjectFirestore(project_id);
     return { props: { project } }
}