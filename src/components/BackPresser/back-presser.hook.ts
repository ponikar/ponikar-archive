import { useState } from "react"


export interface BackPropsType {
    show: boolean;
    onBackPress: (cb?: Function) => void;
}

const BACK_PRESS_INITIAL_STATE: BackPropsType = {
    show: false,
    onBackPress: () => {}
};


export const useBackPresser = ():[BackPropsType, (props:object) => void] => {
    const [backProps, setBackProps] = useState<BackPropsType>(BACK_PRESS_INITIAL_STATE);

    const setAnyBackProps = (props:object) => setBackProps({...backProps, ...props}); 
    return [backProps, setAnyBackProps];
}