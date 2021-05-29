import style from "./create-blog.module.css"
import marked from "marked"
import { FC, useState } from "react";

interface CreateBlogTextAreaProps {
  title: string;
  article: string;
  setBlog: (prop: object) => void
}

export const CreateBlogTextArea :FC<CreateBlogTextAreaProps> = ({ title, article, setBlog }) => {
  
   return <div className="grid gap-5 mt-28 font-primary grid-cols-2">
    <div className="bg-white py-5">
    <div
      dangerouslySetInnerHTML={{ __html: marked(article) }}
      className={`${style.article_container} bg-white`}>
   </div>
    </div>

    <div className="bg-white py-5">
      <input className="m-5 text-sm" placeholder="Add Tags" />
      <textarea placeholder="Start writing your blog!" value={article} onChange={e => setBlog({ article: e.target.value })} 
      className={`${style.article_container}`} />
    </div>
   </div>
}


export default CreateBlogTextArea