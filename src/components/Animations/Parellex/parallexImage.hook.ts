import { MotionValue, useTransform, useViewportScroll } from "framer-motion";


interface withParallexEffectType {
    inputRange?: number[]
}


const withParallexEffect = (inputRange = [0, 1]) : [MotionValue<number>, MotionValue<number>] => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, inputRange, [-10, 400]);
    const scale = useTransform(scrollYProgress, inputRange, [1, 1.3]);

    return [y, scale];
    
}

export default withParallexEffect;