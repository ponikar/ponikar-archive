import { FC } from "react"
import Image from "next/image"
import Link from "next/link";
import { ProjectProps } from "../../Store/Reducers/ponikar/projects/projects.types";



const ShowcaseItem :FC<ProjectProps> = ({ images, title, }) => {

    return <Link href="#">
        <section>
            <Image alt={title}
            src={images[0] || "/assets/images/showcase.jpg"} 
            width={1000} 
            height={1000} 
            objectFit="cover" />
        </section>
    </Link>
}

export default ShowcaseItem;