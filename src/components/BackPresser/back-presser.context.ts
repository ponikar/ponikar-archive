import { createContext } from "react";
import { BackPropsType } from "./back-presser.hook"


interface BackPresserContext {
    show: boolean,
    setAnyBackProps: (props) => void,
    onBackPress: () => void;
}



export const BackPressContext = createContext<BackPresserContext>({ 
        show: false,
        setAnyBackProps: () => {},
        onBackPress: () => {}
});