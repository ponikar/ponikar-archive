import { GetStaticProps } from "next";
import { FC } from "react";
import { getRecentProjects } from "../../Firebase/firestore/projects.firestore";
import { ProjectProps } from "../../src/Store/Reducers/ponikar/projects/projects.types";


interface ProjectsPageProps {
    projects: ProjectProps[]
}


const Projects:FC<ProjectsPageProps> = ({ projects }) => {
    return <div />;
}

export default Projects;

export const getStaticProps:GetStaticProps = async context => {
    const projects = await getRecentProjects(10);
    return {
        props: {projects},
    }
}