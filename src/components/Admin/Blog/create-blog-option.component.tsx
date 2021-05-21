import { FC } from "react";


interface CreateBlogOptionsProps {
    x?: number;
    y?: number;
}



const CreateBlogOptions :FC<CreateBlogOptionsProps> = ({ x = 0, y = 0 }) => {
    return <div className="absolute border border-black p-2 bg-white" style={{ left: x, top: y }}>
        <div className="cursor-pointer"> Bold </div>
    </div>
}

export default CreateBlogOptions;