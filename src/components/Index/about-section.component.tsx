import PrimaryButton from "../Button/button.component";
import SectionTitle from "../section/section-title.component";






const AboutSection = () => {
    return <section className="grid lg:grid-cols-2 grid-cols-1  lg:mt-24 mt-10">
        <img className="w-11/12" src="/assets/images/about.png"  />   

        <div className="lg:w-full w-11/12 mx-auto flex-col lg:mt-0 mt-10 flex justify-center flex-grow">
            <SectionTitle className="mb-3" title="Hi There," />
            <p className="a-line-highlight lg:w-9/12 w-11/12" style={{ fontWeight: 400 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>

            <div className="mt-4"> <PrimaryButton title="Say Hi," /></div>
        </div>
    </section>
}

export default AboutSection;