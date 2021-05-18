import PageBase from "../src/components/Base/page-base.component"
import AboutSection from "../src/components/Index/about-section.component"
import BlogSection from "../src/components/Index/blogs-section.component"
import HeroSection from "../src/components/Index/hero-section.component"
import StackTech from "../src/components/Index/stack-tech.component"


const Index = () => {

    return (
        <PageBase>
         <HeroSection />
         <AboutSection />
         <StackTech />
         <BlogSection />
        </PageBase>
    )
}

export default Index;