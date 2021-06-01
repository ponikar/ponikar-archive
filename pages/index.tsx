import { GetStaticProps } from "next"
import { FC } from "react"
import { getRecentBlogs } from "../Firebase/firestore/blogs.firestore"
import PageBase from "../src/components/Base/page-base.component"
import AboutSection from "../src/components/Index/about-section.component"
import BlogSection from "../src/components/Index/blogs-section.component"
import HeroSection from "../src/components/Index/hero-section.component"
import Showcase from "../src/components/Index/showcase.component"
import StackTech from "../src/components/Index/stack-tech.component"
import { LandingPageContext, LandingPageTypes } from "../src/Context/landing-page.context"


const Index :FC<LandingPageTypes> = ({ children, ...props }) => {
    return (
            <LandingPageContext.Provider value={{ ...props }}>
                <PageBase>
                <HeroSection />
                <AboutSection />
                <StackTech />
                <Showcase />
                <BlogSection />
            </PageBase>
            </LandingPageContext.Provider>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const blogs = await getRecentBlogs();
    return {
        props:{ blogs }
    }
}

export default Index;