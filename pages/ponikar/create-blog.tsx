import { FC } from "react";
import { CreateBlogTextArea } from "../../src/components/Create-Blog/create-blog.component";




const CreateBlog: FC<{}> = () => {
    return <main className="w-9/12 mx-auto grid grid-cols-6">
        <div className="flex col-span-2">

        </div>
        <div className="col-span-4 p-5 bg-white">
           <CreateBlogTextArea />
        </div>
    </main>
}

export default CreateBlog;

