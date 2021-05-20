import { motion } from "framer-motion"
import { useContext } from "react";
import { HeaderContext, HeaderContextTypes } from "../../Context/header.context";



const MenuIcon = () => {

    const { isMenuOpen, setIsMenuOpen } = useContext<HeaderContextTypes>(HeaderContext)

    return <>
     <motion.div className="relative lg:hidden block -top-1" onClick={_ => setIsMenuOpen(!isMenuOpen)}>
        <svg width="28" height="28" viewBox="0 0 26 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.line animate={ isMenuOpen ? {x1: 0.331933, y1: 0.759863, x2: 19.3319, y2: 17.6261} :  { x1: 0.662415, y1: 0.5, x2: 25.6624, y2: 0.5 }}  stroke="black"/>
        <motion.line animate={ isMenuOpen ? {x1: 0.737239, y1: 17.7158, x2: 18.9922, y2: 0.634921} :  { x1: 0.662415, y1: 10.5, x2: 25.6624, y2: 10.5 } }   stroke="black"/>
        </svg>
    </motion.div>
    </>
}

export default MenuIcon;