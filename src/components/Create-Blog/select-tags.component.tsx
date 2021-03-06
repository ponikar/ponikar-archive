import { FC, memo, useContext } from "react";
import Select from "react-select/creatable"
import { CreateBlogContext } from "../../Context/create-blog.context";

interface SelectTagsProps {

}


const SelectTags :FC<SelectTagsProps> = ({ }) => {

    const {  setProps, tags } = useContext(CreateBlogContext);

    return <div className="m-5 border-0">
        <p className="text-base">  Select Tags </p>
        <Select
            className="bg-back py-2"
            isMulti
            value={tags.map(tag => ({ value: tag, label: tag }))}
            onChange={selected =>  setProps({ tags: selected.map(s => s.value.toLocaleLowerCase()) })}
            name="colors"
            // options={[{ label: "HELLO", value: "hello" }]}
  />
    </div>

}

export default memo(SelectTags);