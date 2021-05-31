import { FC } from "react";
import { SocialMediaLinkType } from "../../data/static-media-link.data";




const SocialIcon :FC<SocialMediaLinkType> = ({ src, href = "#", alt }) => {
    return <a href={href} className="mr-4">
        <img color="#000" alt={alt} width={22} height={22} src={src} />
    </a>
}


export default SocialIcon;