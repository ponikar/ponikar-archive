import Link from "next/link";
import { FC } from "react";




interface FancyLinkProps {
    href: string;
    title?: string;
}


const FancyLink :FC<FancyLinkProps> = ({ children, title, href }) => {
    return <Link href={href}>
    <a className="underline font-primary"> 
    { children ? children : title }
     </a>
    </Link>
};

export default FancyLink;