import { FC } from "react"
import Image from "next/image"
import Link from "next/link";
import { ProjectProps } from "../../Store/Reducers/ponikar/projects/projects.types";



const ShowcaseItem :FC<ProjectProps> = ({ images, title, }) => {
    console.log(images);
    return <Link href="#">
        <section className="w-full" style={{ height: "200px" }}>
            <Image  src={images[0] || "/assets/images/showcase.jpg"} width={1000} height={1000} objectFit="cover" />
        </section>
    </Link>
}

export default ShowcaseItem;