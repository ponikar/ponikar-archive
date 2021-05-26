import {FooterLeftSubSection, FooterLeftInputSection} from "./footer-left-subsection.component";





const FooterLeft = () => {

    return <section className="flex-1 relative lg:px-14 px-5 pt-10 font-secondary text-white">
            <h1 className="text-3xl"> Dp </h1>
            <div className="flex lg:flex-row flex-col">
                <FooterLeftSubSection />
                <FooterLeftInputSection />
            </div>
    </section>
}

export default FooterLeft;