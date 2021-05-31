import { FC, useContext } from "react";
import { motion } from "framer-motion"
import { HeaderContext, HeaderContextTypes } from "../../../Context/header.context";
import MobileMenuLink from "./mobile-menu-link.component";
import { MobileMenuAnimate } from "./mobile-menu.animate";
import { MenuData } from "../../../data/static-menu.data";



const MobileMenu :FC<{}> = () => {

    const { isMenuOpen } = useContext<HeaderContextTypes>(HeaderContext);

    const { transition, animate } = MobileMenuAnimate(isMenuOpen);
    return <motion.nav style={{ height: "100vh", y: "1000px" }} transition={transition} animate={animate} 
            className="lg:hidden p-4 fixed z-10 flex top-0 left-0 bg-background w-full h-screen">
            <div className="w-11/12 flex flex-col justify-center font-secondary">
               { MenuData.map((menu, index) => <MobileMenuLink key={index} {...menu} />) }
            </div>
    </motion.nav>
}


export default MobileMenu;