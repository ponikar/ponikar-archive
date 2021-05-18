import { FC } from "react";
import SectionTitle from "../section/section-title.component";
import Section from "../section/section.component";
import ShowcaseItem from "./showcase-item.component";





const Showcase :FC<{}> = () => {
    return <Section isContainer>
        <SectionTitle title="ShowCase" />
        <section className="grid mt-10 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <ShowcaseItem />
            <ShowcaseItem />
            <ShowcaseItem />
            <ShowcaseItem />
        </section>
    </Section>
}

export default Showcase;