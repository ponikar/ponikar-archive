import { FC } from "react";
import Link from "next/link"

interface HeaderLinkProps {
    title: string;
    href?: ""
}

const HeaderLink:FC<HeaderLinkProps> = ({ title, href = "#" }) =>  {
    return <Link href={href}>
     <a className="font-secondary ml-8 text-sm"> {title}  </a>
    </Link>
}

export default HeaderLink;