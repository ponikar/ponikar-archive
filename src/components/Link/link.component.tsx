import Link from "next/link";
import { FC } from "react";




interface FancyLinkProps {
    href: string;
    title: string;
}


const FancyLink :FC<FancyLinkProps> = ({ title, href }) => {
    return <Link href={href}>
    <a className="underline font-primary"> { title } </a>
    </Link>
};

export default FancyLink;