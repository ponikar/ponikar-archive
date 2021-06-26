import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

const InputStyle =
    'p-1 px-2 w-full bg-background placeholder-grey border rounded-highlight focus:border-primary border-bcolor';

interface InputProps {
    label?: string;
    className?: string;
    containerClassName?: string;
    inputClassName?: string;
}

export const TextInput: FC<InputProps & InputHTMLAttributes<HTMLInputElement>> =
    ({ label, containerClassName, inputClassName, ...props }) => {
        return (
            <div
                className={`font-primary my-5 ${
                    containerClassName && containerClassName
                }`}
            >
                <label className="relative top-1"> {label} </label>
                <input
                    {...props}
                    className={`${InputStyle} ${inputClassName}`}
                />
            </div>
        );
    };

export const TextArea: FC<
    InputProps & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ label, className, ...props }) => {
    return (
        <div className="font-primary my-5">
            <label className="relative top-1 font-medium"> {label} </label>
            <textarea className={`${InputStyle}`} {...props} />
        </div>
    );
};
