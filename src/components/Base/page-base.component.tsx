import { FC } from "react"
import Footer from "../Footer/footer.component"
import Header from "../Header/header.component"




const PageBase: FC<{}> = ({ children }) => {
    return <>
    <Header />
    { children }
    <Footer />
    </>
}

export default PageBase;