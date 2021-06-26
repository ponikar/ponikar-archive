import Link from 'next/link';
import { FC } from 'react';
import { MenuDataTypes } from '../../data/static-menu.data';

const FooterLink: FC<MenuDataTypes> = ({ title, href = '#' }) => {
    return (
        <Link passHref href={href}>
            <a className="mb-1"> {title} </a>
        </Link>
    );
};

export default FooterLink;
