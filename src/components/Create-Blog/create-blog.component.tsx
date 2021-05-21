import { FC, SyntheticEvent, useRef, useState } from "react";
import CreateBlogOptions from "../Admin/Blog/create-blog-option.component";
import style from "./create-blog.module.css"


const INITIAL_STATE = {
    starting_offset: 0,
    ending_offset: 0,
}

const INITIAL_OPTIONS_OFFSETS = { x: 0, y: 0, show: false }

export const CreateBlogTextArea :FC<{}> = () => {
    const [selectedText, setSelectedText] = useState(INITIAL_STATE);
    const [optionOffsets, setOptionOffsets] = useState(INITIAL_OPTIONS_OFFSETS);
    const [article, setArticle] = useState("Hello");
    const articleRef = useRef<HTMLDivElement>(null);

    const onSelect = (e : SyntheticEvent<HTMLDivElement>) => {
        const selection = window.getSelection()
        const selectedText = selection.toString()
        const starting_offset = selection.focusOffset;
       
        
        if(selectedText.length) {
            setSelectedText({ starting_offset, ending_offset: starting_offset + selectedText.length - 1 })
            setOptionOffsets({ show:true, x: e.nativeEvent?.pageX, y: e.nativeEvent?.pageY + 20 })
        } else {
            setOptionOffsets(INITIAL_OPTIONS_OFFSETS);
        }
    }


    const makeBold = () => {
    
    }


    console.log([...article])
    

    return <>
    <input placeholder="Article Title" className={style.title_container} />
    <div ref={articleRef} className={style.article_container} contentEditable onInput={_ => setArticle(articleRef.current.innerText)} onSelect={onSelect} />
    <div> {article} </div>
    { optionOffsets.show && <CreateBlogOptions x={optionOffsets.x} y={optionOffsets.y} /> }
    <button title="BOLD" onClick={makeBold} />
    </>
}