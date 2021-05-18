import Link from "next/link"
import { FC } from "react"

interface FooterLinkProps {
    title: string;
    href?: string;
}

const FooterLink :FC<FooterLinkProps> = ({ title, href = "#" }) => {
    return <Link href={href}>
    <a className="mb-1"> {title} </a>
    </Link>
};

export default FooterLink;