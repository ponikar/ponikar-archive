import { FC } from 'react';
import { ProjectProps } from '../../Store/Reducers/ponikar/projects/projects.types';
import NextImage from '../Image/next-image.component';
import { MediumButton } from '../Button/button.component';
import { minimizeString } from '../../Helpers/State/state.helper';
import FancyLink from '../Link/link.component';

const Project: FC<ProjectProps> = ({ images, title, description, id }) => {
    return (
        <section className="p-3 font-primary h-full flex  bg-white primary-font overflow-hidden relative">
            <NextImage
                src={images[0]}
                height={150}
                className="rounded-secondary"
                width={150}
                objectFit="cover"
            />
            <div className="w-full ml-3 relative flex flex-col bg-white-transparent h-full">
                <h2 className="text-lg"> {minimizeString(title, 20)} </h2>
                <p className="text-sm text-highlight">
                    {minimizeString(description, 30)}
                </p>
                <div className="absolute bottom-0">
                    <FancyLink href={`/projects/${id}`}>
                        <MediumButton textClassName="text-sm" title="Explore" />
                    </FancyLink>
                </div>
            </div>
        </section>
    );
};

export default Project;
