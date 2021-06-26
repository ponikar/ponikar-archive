import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MediumButton } from '../Button/button.component';
import marked from 'marked';
import { parseTimeAStamp } from '../../../Firebase/firestore/firestore.helper';
export interface BlogPreviewProps {
    title: string;
    id: string;
    article: string;
    createdAt?: string;
    tags?: string[];
    description?: string;
    preview_image?: string;
}

const BlogPreviewItem: FC<BlogPreviewProps> = ({
    title,
    description,
    createdAt,
    id,
    preview_image,
}) => {
    const created_at = parseTimeAStamp(createdAt);

    return (
        <section className="bg-white rounded-primary">
            <Image
                alt={title}
                src={preview_image || '/assets/images/blog.jpg'}
                width={1000}
                height={800}
            />

            <article className="p-4">
                <h2 className="text-xl mb-3 font-secondary"> {title} </h2>
                <span className="text-sm text-highlight"> {created_at} </span>
                <p className="a-line-highlight font-primary"> {description} </p>

                <Link href={`/blogs/${id}`}>
                    <a>
                        <MediumButton className="mt-4" title="Read More" />
                    </a>
                </Link>
            </article>
        </section>
    );
};

export default BlogPreviewItem;
