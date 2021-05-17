import { FlexCenter } from "../../TailwindClasses/flex.classes"
import HeroLeft from "./hero-left.component";
import HeroRight from "./hero-right.component"




const HeroSection = () => {
    return <section className={`${FlexCenter} lg:h-screen  lg:flex-row flex-col`}>
        <HeroLeft />
        <HeroRight />
    </section>
}

export default HeroSection;