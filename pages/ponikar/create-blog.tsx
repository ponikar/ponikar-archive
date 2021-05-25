import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, LegacyRef, RefObject, useCallback, useRef, useState } from "react";
import { MediumButton } from "../../src/components/Button/button.component";
import BlogTitle from "../../src/components/Create-Blog/blog-title.component";
import { CreateBlogTextArea } from "../../src/components/Create-Blog/create-blog.component";


interface BlogProps {
    title: string;
    article: string;
}

const INITIAL_PROPS :BlogProps = {
    title: "",
    article: "",
}

const CreateBlog: FC<{}> = () => {

    const [blog, setBlog] = useState<BlogProps>(INITIAL_PROPS);
    const fileRef = useRef(null);

    const openFiles = useCallback(() => {
        fileRef.current.click();
        
    }, [fileRef]);

    const appendImage = useCallback((e : ChangeEvent<HTMLInputElement>) => {
        const url = URL.createObjectURL(e.currentTarget.files[0]);
        setBlog({ ...blog, article: `${blog.article} ![alt](${url})` })
        console.log(blog)
    }, [blog]);

    const setProps = (props:object) => setBlog({...blog, ...props});
  
    
    return <>
    <nav className="w-full absolute top-0 left-0 bg-white">
        <div className="w-8/12 mx-auto flex items-center justify-between p-2">
            <BlogTitle title={blog.title} onChange={setProps} />
            <div> 
                <MediumButton secondary onClick={openFiles}  title="Add Image" />
                <MediumButton className="ml-2" title="Publish" /></div>
            </div>
    </nav>
    <main className="w-10/12 mx-auto">
           <input accept="images" type="file" ref={fileRef} onChange={appendImage}  />
           <CreateBlogTextArea {...blog} setBlog={setProps} />
    </main>
    </>
}

export default CreateBlog;

