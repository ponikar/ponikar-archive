import { ButtonHTMLAttributes, FC } from "react";


interface PrimaryButtonProps {
    title: string;
    className?: string;
    secondary?: boolean;

}


type ButtonProps = PrimaryButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

const PrimaryButton :FC<ButtonProps>  = ({ title, className = "" }) => {
    return <button className={`bg-primary rounded-primary lg:text-xs text-xs lg:px-8 px-4 py-3 text-white font-secondary ${className}`}>
        { title }
    </button>    
}

export const MediumButton :FC<PrimaryButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({ title, className = "", secondary ,...props }) => {
    return <button {...props} className={` ${secondary ? "bg-white text-primary" : "bg-primary text-white"} rounded-primary text-base px-3 py-1 pt-2 font-primary ${className}`}>
    { title }
</button>    
}

export default PrimaryButton;