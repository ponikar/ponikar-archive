import { FC, useContext } from 'react';
import { Cpu } from 'react-feather';
import { HeaderContext } from '../../../Context/header.context';
import { motion } from 'framer-motion';
import { MenuDataTypes } from '../../../data/static-menu.data';
import Link from 'next/link';

const MobileMenuLink: FC<MenuDataTypes> = ({ title, href = '#', Icon }) => {
    const { isMenuOpen } = useContext(HeaderContext);

    return (
        <Link href={href} passHref>
            <motion.a
                transition={{ duration: 0.6, delay: Math.random() }}
                animate={
                    isMenuOpen ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                className="flex mb-4  items-center"
            >
                {Icon && <Icon size={22} strokeWidth={0.8} />}
                <h2 className="ml-2 text-base"> {title} </h2>
            </motion.a>
        </Link>
    );
};

export default MobileMenuLink;
