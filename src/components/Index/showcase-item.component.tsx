import { FC } from "react"
import Image from "next/image"
import Link from "next/link";

interface ShowcaseItemProps {
    src?: string;
    href?: string;
}

const ShowcaseItem :FC<ShowcaseItemProps> = ({ src = "/assets/images/showcase.jpg", href = "#" }) => {
    return <Link href={href}>
        <section className="w-full" style={{ height: "200px" }}>
            <Image src={src} width={1000} height={1000} objectFit="contain" />
        </section>
    </Link>
}

export default ShowcaseItem;