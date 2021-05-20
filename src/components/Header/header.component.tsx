import { useCycle } from "framer-motion";
import { useState } from "react";
import { HeaderContext, HeaderContextTypes, HEADER_CONTEXT_STATE } from "../../Context/header.context";
import { FlexCenter } from "../../TailwindClasses/flex.classes";
import Logo from "../Logo/logo.component";
import HeaderLink from "./header-link.component";
import headerStyle from "./header.module.css"
import MenuIcon from "./menu-icon.component";
import MobileMenu from "./Mobile-Menu/mobile-menu.component";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useCycle<boolean>(false, true);

    
    return <HeaderContext.Provider value={{ isMenuOpen, setIsMenuOpen: bool => setIsMenuOpen(bool) }}>
    <nav className={`${FlexCenter} z-20 ${headerStyle.container} fixed top-0 left-0 w-11/12 py-4 mx-auto`}>
        <header>
            <Logo />
        </header>
        
        <MenuIcon />
        <div className="lg:flex hidden">
            <HeaderLink title="Home" />
            <HeaderLink title="About me" />
            <HeaderLink title="Projects" />
            <HeaderLink title="Blogs" />
            <HeaderLink title="Stack tech" />
        </div>

        {/* Mobile Links */}
    </nav>
    <MobileMenu />
    </HeaderContext.Provider>
}

export default Header;