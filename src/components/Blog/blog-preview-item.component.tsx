import { FC } from "react"
import Link from "next/link"
import Image from "next/image"

interface BlogPreviewProps {
    title: string;
    article: string;
    href?: string;
    created_at?:string;
}


const BlogPreviewItem :FC<BlogPreviewProps> = ({ title, article, created_at }) => {
    return <section className="bg-white rounded-primary">
        <Image src="/assets/images/blog.jpg" width={310} height={250}  />
        <h2> {title} </h2>
        {/* <span> {created_at} </span> */}
        <article> {article} </article>
    </section>
};

export default BlogPreviewItem;