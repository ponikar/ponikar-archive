import style from "./create-blog.module.css"
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import marked from "marked"
import { useState } from "react";


export const CreateBlogTextArea = () => {
  const [article, setArticle] = useState("");
  const [title, setTitle] = useState("")
   return <div className="grid gap-5 mt-10 font-primary grid-cols-2">
    <div className="bg-white py-5">
      <input value={title} readOnly className={style.title_container} placeholder="Give a title" />
    <div
      dangerouslySetInnerHTML={{ __html: marked(marked(article)) }}
      className={`${style.article_container} bg-white`}>
   </div>
    </div>

    <div className="bg-white py-5">
      <input value={title} onChange={e => setTitle(e.target.value)} className={style.title_container} placeholder="Give a title" />
      <textarea placeholder="Start writing your blog!" value={article} onChange={e => setArticle(e.target.value)} 
      className={`${style.article_container}`} />
    </div>
   </div>
}


export default CreateBlogTextArea