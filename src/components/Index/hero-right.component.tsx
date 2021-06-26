import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Parallex from '../Animations/Parellex/parallex.component';
import useParallexEffect from '../Animations/Parellex/parallexImage.hook';

const HeroRight = () => {
    const [y, scale] = useParallexEffect();

    return (
        <div className="flex-1 overflow-hidden">
            <motion.img
                style={{ y, scale }}
                src="/assets/images/hero.jpg"
                className="mx-auto w-full lg:h-screen h-5/6 object-cover"
                alt="this is alt"
            />
        </div>
    );
};

export default HeroRight;
