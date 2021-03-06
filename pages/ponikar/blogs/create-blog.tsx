import { ChangeEvent,  FC, useCallback, useRef, useState } from "react";
import { uploadImage } from "../../../Firebase/firestore/blogs.storage";
import CreateBlogHeader from "../../../src/components/Admin/Blog/create-blog-header.component";
import AdminPageContainer from "../../../src/components/Admin/Container/container.component";
import { CreateBlogTextArea } from "../../../src/components/Create-Blog/create-blog.component";
import { CreateBlogContext, CREATE_BLOG_INITIAL_STATE, BlogProps } from "../../../src/Context/create-blog.context";


const CreateBlog: FC<{}> = () => {

    const [blog, setBlog] = useState<BlogProps>(CREATE_BLOG_INITIAL_STATE);
    const fileRef = useRef(null);


    const appendImage = useCallback(async (e : ChangeEvent<HTMLInputElement>) => {

        if(e.target.files.length) {
            const publicURL = await uploadImage(e.target.files);
            setBlog({ ...blog, article: `${blog.article} ![alt](${publicURL})` })
        }
    }, [blog]);

    const setProps = (props:object) => setBlog({...blog, ...props});
  
    
    return <CreateBlogContext.Provider value={{ ...blog, tags: blog.tags ,fileRef, setProps }}>
    <CreateBlogHeader />  
    <AdminPageContainer>
        <input hidden accept="images" type="file" ref={fileRef} onChange={appendImage}  />
        <CreateBlogTextArea {...blog} setBlog={setProps} />
    </AdminPageContainer>
    </CreateBlogContext.Provider>
}

export default CreateBlog;

