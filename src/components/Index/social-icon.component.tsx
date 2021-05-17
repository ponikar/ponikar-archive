import { FC } from "react";


interface SocialIconProps {
    src: string;
    href?: string;
}


const SocialIcon :FC<SocialIconProps> = ({ src, href = "#" }) => {
    return <a href={href} className="mr-4">
        <img width={24} height={24} src={src} />
    </a>
}


export default SocialIcon;