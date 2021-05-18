import Instagram from "../../../public/assets/svgs/instagram.svg"
import Twitter from "../../../public/assets/svgs/twitter.svg"
import Linkedin from "../../../public/assets/svgs/linkedin.svg"
import FooterSubscribe from "./footer-subscribe.component"




export const FooterLeftSubSection = () => {
    return <div className="flex flex-col">
    <h2 className="text-lg mt-5 mb-2"> Links  </h2>
         <a className="mb-1">Home</a>
         <a className="mb-1">About Me</a>
         <a className="mb-1">Projects</a>
         <a className="mb-1">Blogs</a>
         <a className="mb-1">Stack Tech</a>
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
