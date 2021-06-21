import { GetStaticProps } from 'next';
import { FC } from 'react';
import { getRecentProjects } from '../../Firebase/firestore/projects.firestore';
import Pagebase from '../../src/components/Base/page-base.component';
import { ProjectProps } from '../../src/Store/Reducers/ponikar/projects/projects.types';
import Project from '../../src/components/Projects/project.component';
import Section from '../../src/components/section/section.component';
interface ProjectsPageProps {
    projects: ProjectProps[];
}

const Projects: FC<ProjectsPageProps> = ({ projects }) => {
    return (
        <Pagebase>
            <Section
                isContainer
                className="grid lg:grid-cols-3  md:grid-cols-2 gap-5 sm:grid-cols-1"
            >
                {projects.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </Section>
        </Pagebase>
    );
};

export default Projects;

export const getStaticProps: GetStaticProps = async (context) => {
    const projects = await getRecentProjects(10);
    return {
        props: { projects },
    };
};
