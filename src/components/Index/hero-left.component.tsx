import { FlexCenter } from "../../TailwindClasses/flex.classes";
import PrimaryButton from "../Button/button.component";
import SocialIcon from "./social-icon.component";




const HeroLeft = () => {
    return <section className={`${FlexCenter} flex-col lg:mt-0 mt-32 flex-1 h-screen`}>
            <div /> 
            <div className="w-10/12 mx-0">
                <h1 className="lg:text-3xl text-xl lg:text-left text-center font-secondary">
                    The Journey of Fullstack Developer 
                </h1>
                <div className="flex lg:justify-start justify-center">
                <PrimaryButton className="mt-5" title="Explore" />
                </div>
            </div>

            <div className="flex w-10/12 mt-12 lg:justify-start justify-center mb-10">
                <SocialIcon src="/assets/svgs/twitter.svg" />
                <SocialIcon src="/assets/svgs/linkedin.svg" />
                <SocialIcon src="/assets/svgs/instagram.svg" />
            </div>
        </section>
}

export default HeroLeft;