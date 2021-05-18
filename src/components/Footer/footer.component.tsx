import FooterLeft from "./footer-left.component"
import FooterRight from "./footer-right.component"





const Footer = () => {

    return <footer className="bg-primary mt-40">
        <div className="flex lg:flex-row flex-col">
        <FooterLeft />
        <FooterRight />
        </div>
        <p className="text-center py-2 relative bottom-0   text-white font-primary"> Made by Darshan Ponikar 2021 &copy; </p>
    </footer>
}


export default Footer;