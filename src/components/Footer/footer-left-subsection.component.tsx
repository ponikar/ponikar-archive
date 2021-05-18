import Instagram from "../../../public/assets/svgs/instagram.svg"
import Twitter from "../../../public/assets/svgs/twitter.svg"
import Linkedin from "../../../public/assets/svgs/linkedin.svg"
import FooterSubscribe from "./footer-subscribe.component"
import FooterLink from "./footer-link.component"




export const FooterLeftSubSection = () => {
    return <div className="flex flex-col">
    <h2 className="text-lg mt-5 mb-2"> Links  </h2>
         <FooterLink href="/" title="Home" />
         <FooterLink href="/" title="About Me"/>
         <FooterLink href="/" title="Projects"/>
         <FooterLink href="/" title="Blogs"/>
         <FooterLink href="/" title="Stack Tech"/>
    </div>
}

export const FooterLeftInputSection = () => {
    return <div className="flex lg:ml-20 flex-col">
    <h2 className="text-lg mt-5 mb-2"> Follow ME  </h2>
         <div className="flex items-center">
            <div><Twitter fill="#fff" /></div>
            <div className="ml-3"> <Instagram fill="#fff" /></div>
            <div className="ml-3"> <Linkedin fill="#fff" /></div>
         </div>
        <FooterSubscribe />
    </div>
}
