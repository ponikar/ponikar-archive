import { FC } from "react"
import { responsiveContainer } from "../../TailwindClasses/responsive.classes"
import Footer from "../Footer/footer.component"
import Header from "../Header/header.component"




const PageBase: FC<{}> = ({ children }) => {
    return <>
     <div className={responsiveContainer}>
    <Header />
    { children }
    </div>
    <Footer />
    </>
}

export default PageBase;