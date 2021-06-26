import { useState } from "react"


export interface FormHelperType {
    isLoading:boolean,
    message: string;
    success: boolean;
}


const INITIAL_STATE:FormHelperType = {
    isLoading:false,
    message: "",
    success:false,
}

interface setHelperType {
    isLoading?: boolean,
    message?: string,
    success?: boolean
}

type useFormHelpersType = [FormHelperType, (props:setHelperType) => void, FormHelperType];


export const useFormHelpers = () :useFormHelpersType => {
    const [formHelpers, setFormHelpers] = useState<FormHelperType>(INITIAL_STATE);

    const setHelpers = (props: object) => setFormHelpers({...formHelpers, ...props});

    return [formHelpers, setHelpers, INITIAL_STATE];
}