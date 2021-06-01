import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import { MediumButton } from "../Button/button.component"
import marked from "marked"
import { parseTimeAStamp } from "../../../Firebase/firestore/firestore.helper"
export interface BlogPreviewProps {
    title: string;
    id:string;
    article: string;
    createdAt?: string;
    tags?: string[]
}


const BlogPreviewItem :FC<BlogPreviewProps> = ({ title, article, createdAt, id }) => {
    
    const created_at = parseTimeAStamp(createdAt);

    return <section className="bg-white rounded-primary">
        <Image src="/assets/images/blog.jpg" width={1000} height={800}  />
        <article className="py-4 px-4">
        <h2 className="text-xl mb-3 font-secondary"> {title} </h2>
        <span className="text-sm text-highlight"> {created_at} </span>
        <p className="a-line-highlight font-primary" dangerouslySetInnerHTML={{ __html: marked(`${article.substr(0, 100)}...`) }} /> 

        <Link href={`/blogs/${id}`}>
          <a><MediumButton className="mt-4"  title="Read More" /></a>
        </Link>
        </article>
    </section>
};

export default BlogPreviewItem;