import { GetStaticProps } from "next";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getRecentProjects } from "../../../Firebase/firestore/projects.firestore";
import AdminPageContainer from "../../../src/components/Admin/Container/container.component";
import ProjectItem from "../../../src/components/Admin/Project/project-item.component";
import { projectFetched } from "../../../src/Store/Reducers/ponikar/projects/projects.actions";
import { selectProjects } from "../../../src/Store/Reducers/ponikar/projects/projects.selectors";
import { reduxWrapper } from "../../../src/Store/store";





const Projects:FC = () => {
    const { projects } = useSelector(selectProjects);
    return <AdminPageContainer>
        <div className="grid grid-cols-6 gap-5">
        { projects.map(project => <ProjectItem key={project.id} {...project} />) }
        </div>
    </AdminPageContainer>
}

export const getStaticProps :GetStaticProps = reduxWrapper.getStaticProps ( async ({ store: {dispatch} }) => {
    const projects = await getRecentProjects(10);
    dispatch(projectFetched(projects));

    return {
        props:{}
    }
});

export default Projects;