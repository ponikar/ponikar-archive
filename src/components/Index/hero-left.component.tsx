import { FlexCenter } from "../../TailwindClasses/flex.classes";
import PrimaryButton from "../Button/button.component";
import SocialIcon from "./social-icon.component";




const HeroLeft = () => {
    return <section className={`${FlexCenter} flex-col sm:h-screen h-auto relative lg:mt-0 mt-24 flex-1`}>
            <div /> 
            <div className="w-10/12 relative top-10 mx-0">
                <h1 className="lg:text-2xl 2xl:text-4xl sm:w-10/12 w-full text-xl lg:text-left text-center font-secondary">
                    The Journey of Fullstack Developer 
                </h1>
                <div className="flex lg:justify-start justify-center">
                <PrimaryButton className="mt-5" title="Explore" />
                </div>
            </div>

            <div className="flex w-10/12 mt-24 lg:justify-start justify-center mb-5">
                <SocialIcon src="/assets/svgs/twitter.svg" />
                <SocialIcon src="/assets/svgs/linkedin.svg" />
                <SocialIcon src="/assets/svgs/instagram.svg" />
            </div>
        </section>
}

export default HeroLeft;