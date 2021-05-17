import { FlexCenter } from "../../TailwindClasses/flex.classes";
import Logo from "../Logo/logo.component";
import HeaderLink from "./header-link.component";
import headerStyle from "./header.module.css"
import MenuIcon from "./menu-icon.component";


const Header = () => {
    return <nav className={`${FlexCenter} ${headerStyle.container} fixed w-11/12 py-4 mx-auto`}>
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
    </nav>
}

export default Header;