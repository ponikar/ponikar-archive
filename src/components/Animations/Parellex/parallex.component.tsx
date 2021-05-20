import { motion, useTransform, useViewportScroll } from "framer-motion";
import { FC } from "react";




const Parallex:FC<{}> = ({ children }) => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    return <motion.div animate={{ scale: [0.9, 1] }} style={{ y, scale }}>
        {children}
    </motion.div>
}

export default Parallex;