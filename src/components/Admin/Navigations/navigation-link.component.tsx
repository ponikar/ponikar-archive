import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import { Home } from 'react-feather';
import { MenuDataTypes } from '../../../data/static-menu.data';
import { linkAnimatedProps } from './navigate.animate';

interface AdminNavigationLinkProps extends MenuDataTypes {
    toggle: boolean;
}

const AdminNavigationLink: FC<AdminNavigationLinkProps> = ({
    title,
    href = '#',
    Icon,
    toggle,
}) => {
    return (
        <Link passHref href={href}>
            <a>
                {' '}
                <li
                    className={`flex w-full hover:bg-white transition items-center ${
                        toggle ? 'px-4' : 'px-3 py-2'
                    } py-1 text-sm`}
                >
                    <div>
                        {' '}
                        <Icon strokeWidth={1.5} size={20} />{' '}
                    </div>
                    <motion.p
                        {...linkAnimatedProps}
                        animate={toggle ? 'opened' : 'closed'}
                        className="flex-1 ml-1 mt-2"
                    >
                        {' '}
                        {title}{' '}
                    </motion.p>
                </li>
            </a>
        </Link>
    );
};

export default AdminNavigationLink;
