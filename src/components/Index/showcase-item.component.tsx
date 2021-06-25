import { FC } from 'react';
import Image from 'next/image';
import { ProjectProps } from '../../Store/Reducers/ponikar/projects/projects.types';
import FancyLink from '../Link/link.component';

const ShowcaseItem: FC<ProjectProps> = ({ images, title, id }) => {
    return (
        <FancyLink href={`/projects/${id}`}>
            <section>
                <Image
                    alt={title}
                    src={images[0] || '/assets/images/showcase.jpg'}
                    width={1000}
                    height={1000}
                    objectFit="cover"
                />
            </section>
        </FancyLink>
    );
};

export default ShowcaseItem;
