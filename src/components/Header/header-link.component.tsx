import { FC } from "react";
import Link from "next/link"
import { MenuDataTypes } from "../../data/static-menu.data";



const HeaderLink:FC<MenuDataTypes> = ({ title, href = "#" }) =>  {
    return <Link href={href}>
     <a className="font-secondary ml-8 text-sm"> {title}  </a>
    </Link>
}

export default HeaderLink;