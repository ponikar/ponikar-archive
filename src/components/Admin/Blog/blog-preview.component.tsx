import { FC } from "react";
import { Edit, Trash } from "react-feather";
import { BlogPreviewProps } from "../../Blog/blog-preview-item.component";
import { MediumButton } from "../../Button/button.component";





const AdminBlogPreview:FC<BlogPreviewProps> = ({ title, description }) => {
    return <div className="w-full p-3 bg-white flex justify-between">
       <div className="flex flex-col justify-between">
            <h2 className="text-xl"> { title } </h2>
            <p className="mt-3 text-sm"> { description } </p>

            <div><MediumButton className="mt-3" title="View Blog" /></div>
       </div>

       <div className="flex">
         <Trash className="mr-2" size={18} />
         <Edit size={18} />
       </div>
    </div>
}


export default AdminBlogPreview;