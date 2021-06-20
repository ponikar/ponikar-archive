import { FC } from 'react';
import { ProjectProps } from '../../Store/Reducers/ponikar/projects/projects.types';
import NextImage from '../Image/next-image.component';
import { motion } from 'framer-motion';
import PrimaryButton from '../Button/button.component';

const NextAnimatedImage = motion(NextImage);
const Project: FC<ProjectProps> = ({ images, title, description }) => {
    return (
        <motion.section
            initial="rest"
            whileHover="hover"
            className="p-3 bg-white primary-font overflow-hidden relative"
        >
            <NextAnimatedImage
                src={images[0]}
                height={1000}
                className="rounded-secondary"
                width={1000}
                objectFit="cover"
            />
            <motion.div
                variants={{
                    rest: { top: 300 },
                    hover: { top: 0 },
                }}
                className="absolute p-5 left-0 w-full bg-white-transparent h-full"
            >
                <h2 className="my-2 text-lg"> {title} </h2>
                <p className="tstyle={{ top: 400 }}ext-sm text-highlight">
                    {' '}
                    {description.substr(0, 200)}{' '}
                </p>

                <PrimaryButton
                    className="bottom-5 absolute left-3"
                    title="Explore"
                />
            </motion.div>
        </motion.section>
    );
};

export default Project;
