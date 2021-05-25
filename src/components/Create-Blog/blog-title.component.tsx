import { FC } from "react";
import style from "./create-blog.module.css"

interface BlogTitleProps {
    title: string;
    onChange: (props: object) => void;
}



const BlogTitle :FC<BlogTitleProps> = ({  title, onChange }) => {
    
    return <div className="flex-1">
        <input type="text" placeholder="Blog Title" className={`${style.title_container}`} value={title} onChange={e => onChange({ title: e.target.value })} />
    </div>  
}

export default BlogTitle;