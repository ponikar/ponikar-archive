import { FC } from "react";
import { Cpu, Info, Mail } from "react-feather";




const MobileMenu :FC<{}> = () => {
    return <nav className="lg:hidden p-4 mt-16 fixed z-20 flex top-0 left-0 bg-background w-full h-screen">
        <div className="w-11/12 flex flex-col justify-center font-secondary">
            <a className="flex mb-2 items-center">
            <Info size={22} strokeWidth={0.8} />
            <h2 className="ml-2 text-base"> About me </h2>
            </a>

            <a className="flex mb-2 items-center">
            <Cpu size={22} strokeWidth={0.8} />
            <h2 className="ml-2 text-base"> Stack tech </h2>
            </a>

            <a className="flex mb-2 items-center">
            <Mail size={22} strokeWidth={0.8} />
            <h2 className="ml-2 text-base"> Contact me </h2>
            </a>
        </div>
    </nav>
}


export default MobileMenu;