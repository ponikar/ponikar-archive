import { FC, useContext } from "react"
import { Cpu } from "react-feather"
import { HeaderContext } from "../../../Context/header.context"
import { motion } from "framer-motion"



const MobileMenuLink :FC<{}> = () => {

    const { isMenuOpen } = useContext(HeaderContext);

    return <motion.a transition={{ duration: 0.6, delay: Math.random() }} animate={isMenuOpen ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} className="flex mb-2 items-center">
    <Cpu size={22} strokeWidth={0.8} />
    <h2 className="ml-2 text-base"> Stack tech </h2>
    </motion.a>
}

export default MobileMenuLink;