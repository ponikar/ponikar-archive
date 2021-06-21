import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import {
    getProjectFirestore,
    getProjectsID,
} from '../../Firebase/firestore/projects.firestore';
import NextImage from '../../src/components/Image/next-image.component';
import { ReadingArea } from '../../src/components/Reading-Area/reading-area.component';
import { ProjectProps } from '../../src/Store/Reducers/ponikar/projects/projects.types';
import Slider from 'react-slick';
interface ProjectPageProps {
    project?: ProjectProps;
}

const Project: FC<ProjectPageProps> = ({ project }) => {
    const { title, description, images } = project;

    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <ReadingArea>
            <header className="font-secondary my-8 ">
                <h1 className="lg:text-3xl text-xl"> {title} </h1>
                {/* <div className="text-sm mt-2"> {time} &bull; 2 min Read </div> */}
            </header>
            <div className="border">
                <Slider {...settings}>
                    <div>
                        <img src={images[0]} width={100} height={100} />
                    </div>
                    <div>
                        <img src={images[0]} width={100} height={100} />
                    </div>
                </Slider>
            </div>
            <main className="font-primary">
                <p> {description} </p>
            </main>
        </ReadingArea>
    );
};

export default Project;

export const getStaticPaths: GetStaticPaths = async (context) => {
    const paths = await getProjectsID();
    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const {
        params: { project_id },
    } = context;
    const project = await getProjectFirestore(project_id);
    return { props: { project } };
};
