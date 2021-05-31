import { ButtonHTMLAttributes, FC } from "react";


interface PrimaryButtonProps {
    title: string;
    className?: string;
}


type ButtonProps = PrimaryButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

const PrimaryButton :FC<ButtonProps>  = ({ title, className = "" }) => {
    return <button className={`bg-primary rounded-primary lg:text-xs text-xs lg:px-8 px-4 py-3 text-white font-secondary ${className}`}>
        { title }
    </button>    
}

export const MediumButton :FC<ButtonProps> = ({ title, className = "" }) => {
    return <button className={`bg-primary rounded-primary text-base px-3 py-1 pt-2 text-white font-primary ${className}`}>
    { title }
</button>    
}

export default PrimaryButton;