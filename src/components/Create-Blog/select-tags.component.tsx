import { FC, useContext } from "react";
import Select from "react-select/creatable"
import { CreateBlogContext } from "../../Context/create-blog.context";

interface SelectTagsProps {

}


const SelectTags :FC<SelectTagsProps> = ({ }) => {

    const {  setProps, tags } = useContext(CreateBlogContext);

    return <div className="m-5 border-0">
        <p> Select Tags </p>
        <Select
            isMulti
            onChange={selected =>  setProps({ tags: selected.map(s => s.value.toLocaleLowerCase()) })}
            name="colors"
            // options={[{ label: "HELLO", value: "hello" }]}
  />
    </div>

}

export default SelectTags;