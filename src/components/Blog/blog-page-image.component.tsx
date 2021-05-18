import { FC } from "react";
import Image from "next/image"


interface BlogImageProps {
    alt: string;
    src: string;
}

const BlogImage: FC<BlogImageProps> = ({ src, alt  }) =>{
    return <Image
        src={src}
        alt={alt}
        height={800}
        width={800}
        quality={100}
        objectFit="cover" 
    />
}

export default BlogImage