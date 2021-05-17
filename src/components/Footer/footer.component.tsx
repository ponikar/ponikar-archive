import FooterLeft from "./footer-left.component"
import FooterRight from "./footer-right.component"





const Footer = () => {

    return <footer className="bg-primary mt-40">
        <div className="flex lg:flex-row flex-col">
            <FooterLeft />
            <FooterRight />
        </div>
    </footer>
}


export default Footer;