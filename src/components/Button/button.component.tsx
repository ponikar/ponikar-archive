import { FC } from "react";


interface PrimaryButtonProps {
    title: string;
    className?: string;
}



const PrimaryButton :FC<PrimaryButtonProps>  = ({ title, className = "" }) => {
    return <button className={`bg-primary rounded-primary lg:text-xs text-xs px-8 py-3 text-white font-secondary ${className}`}>
        { title }
    </button>    
}

export default PrimaryButton;