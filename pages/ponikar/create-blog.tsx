import { ChangeEvent,  FC, useCallback, useRef, useState } from "react";
import { uploadImage } from "../../Firebase/firestore/blogs.storage";
import CreateBlogHeader from "../../src/components/Admin/Blog/create-blog-header.component";
import { CreateBlogTextArea } from "../../src/components/Create-Blog/create-blog.component";
import { CreateBlogContext } from "../../src/Context/create-blog.context";


interface BlogProps {
    title: string;
    article: string;
    tags?: string[];
}

const INITIAL_PROPS :BlogProps = {
    title: "",
    article: "",
    tags: []
}

const CreateBlog: FC<{}> = () => {

    const [blog, setBlog] = useState<BlogProps>(INITIAL_PROPS);
    const fileRef = useRef(null);


    const appendImage = useCallback(async (e : ChangeEvent<HTMLInputElement>) => {

        const publicURL = await uploadImage(e.target.files);
        setBlog({ ...blog, article: `${blog.article} ![alt](${publicURL})` })
        console.log(blog)
    }, [blog]);

    const setProps = (props:object) => setBlog({...blog, ...props});
  
    
    return <CreateBlogContext.Provider value={{ ...blog, tags: blog.tags ,fileRef, setProps }}>
    <CreateBlogHeader />  
    <main className="w-10/12 mx-auto">
        <input hidden accept="images" type="file" ref={fileRef} onChange={appendImage}  />
        <CreateBlogTextArea {...blog} setBlog={setProps} />
    </main>
    </CreateBlogContext.Provider>
}

export default CreateBlog;

