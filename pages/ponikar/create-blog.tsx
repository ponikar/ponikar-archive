import { FC } from "react";
import { CreateBlogTextArea } from "../../src/components/Create-Blog/create-blog.component";




const CreateBlog: FC<{}> = () => {
    return <main className="w-9/12 mx-auto">
           <CreateBlogTextArea />
    </main>
}

export default CreateBlog;

