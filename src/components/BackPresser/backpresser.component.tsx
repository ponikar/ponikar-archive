import { FC, useCallback, useContext } from "react";
import { BackPressContext } from "./back-presser.context";




const BackPresser:FC<{}> = () => {
    const { onBackPress, setAnyBackProps  } = useContext(BackPressContext);
    
    const onClick = useCallback(() => {
            onBackPress();
            setAnyBackProps({ show: false });
    }, [onBackPress]);   
    return <div onClick={onClick} className="bg-black opacity-75 fixed top-0 left-0 w-screen h-screen z-10" />
}

export default BackPresser;