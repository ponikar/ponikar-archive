import { ImageProps } from 'next/image';
import { FC } from 'react';
import Image from 'next/image';

const NextImage: FC<ImageProps> = ({ ...props }) => {
    return <Image {...props} />;
};
export default NextImage;
