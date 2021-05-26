import { useEffect } from "react"
import { PersistGate } from "redux-persist/integration/react"
import PageBase from "../src/components/Base/page-base.component"
import AboutSection from "../src/components/Index/about-section.component"
import BlogSection from "../src/components/Index/blogs-section.component"
import HeroSection from "../src/components/Index/hero-section.component"
import Showcase from "../src/components/Index/showcase.component"
import StackTech from "../src/components/Index/stack-tech.component"
import { reduxConfig } from "../src/Store/store"
const { persistor } = reduxConfig();


const Index = () => {
    return (
        <PersistGate persistor={persistor}>
             <PageBase>
                <HeroSection />
                <AboutSection />
                <StackTech />
                <Showcase />
                <BlogSection />
            </PageBase>
        </PersistGate>
    )
}

export default Index;