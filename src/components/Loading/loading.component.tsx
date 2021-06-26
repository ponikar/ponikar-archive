import { FC } from "react";
import style from "./loading.module.css"





export const Loading :FC<{}> = ({ }) => {
    return <div className="flex w-full my-1 justify-center items-center">
        <div className={`${style.loading_container} animate-spin`} /> 
    </div>
}

