import { FC } from "react";


interface SocialIconProps {
    src: string;
    href?: string;
}


const SocialIcon :FC<SocialIconProps> = ({ src, href = "#" }) => {
    return <a href={href} className="mr-4">
        <img color="#000" width={22} height={22} src={src} />
    </a>
}


export default SocialIcon;