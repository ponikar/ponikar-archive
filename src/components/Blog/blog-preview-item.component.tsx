import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import { MediumButton } from "../Button/button.component"

interface BlogPreviewProps {
    title: string;
    article: string;
    href?: string;
    created_at?:string;
}


const BlogPreviewItem :FC<BlogPreviewProps> = ({ title, article, created_at }) => {
    return <section className="bg-white rounded-primary">
        <Image src="/assets/images/blog.jpg" width={1000} height={800}  />
        <article className="py-4 px-4">
        <h2 className="text-xl mb-3 font-secondary"> {title} </h2>
        <span className="text-sm text-highlight"> 23th March, 2020 </span>
        <p className="a-line-highlight font-primary"> {article} </p>

        <MediumButton className="mt-4"  title="Read More" />
        </article>
    </section>
};

export default BlogPreviewItem;