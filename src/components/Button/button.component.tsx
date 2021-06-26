import { ButtonHTMLAttributes, FC } from 'react';

interface PrimaryButtonProps {
    title: string;
    className?: string;
    secondary?: boolean;
    textClassName?: string;
}

type ButtonProps = PrimaryButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton: FC<ButtonProps> = ({
    title,
    className = '',
    ...props
}) => {
    return (
        <button
            {...props}
            className={`bg-primary rounded-primary lg:text-xs text-xs lg:px-8 px-4 py-3 text-white font-secondary ${className}`}
        >
            {title}
        </button>
    );
};

export const MediumButton: FC<ButtonProps> = ({
    title,
    className = '',
    secondary,
    textClassName = 'text-base',
    ...props
}) => {
    return (
        <button
            {...props}
            className={` ${
                secondary ? 'bg-white text-primary' : 'bg-primary text-white'
            } rounded-primary ${textClassName}  px-3 py-1 pt-2 font-primary ${className}`}
        >
            {title}
        </button>
    );
};

export default PrimaryButton;
