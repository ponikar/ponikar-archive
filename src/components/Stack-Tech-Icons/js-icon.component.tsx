import { motion, useTransform, useViewportScroll } from "framer-motion";
import Icon from "../../media/svgs/js.svg"



const JSIcon = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5])
    return <motion.div style={{ scale }} className="flex justify-center items-center">
    <Icon /> 
</motion.div>
}


export default JSIcon;