import Image from 'next/image';
import { FC } from 'react';

interface LogoProps {
    size?: number;
}

const Logo: FC<LogoProps> = ({ size = 35 }) => {
    return (
        <Image
            alt="This is alt"
            src="/assets/svgs/logo.svg"
            width={size}
            height={size}
        />
    );
};

export default Logo;
