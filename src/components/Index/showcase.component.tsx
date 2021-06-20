import { FC, useContext } from 'react';
import { LandingPageContext } from '../../Context/landing-page.context';
import FancyLink from '../Link/link.component';
import SectionTitle from '../section/section-title.component';
import Section from '../section/section.component';
import ShowcaseItem from './showcase-item.component';

const Showcase: FC<{}> = () => {
    const { projects } = useContext(LandingPageContext);
    return (
        <Section isContainer>
            <SectionTitle title="ShowCase" />
            <section className="grid mt-10 gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                {projects.map((project) => (
                    <ShowcaseItem key={project.id} {...project} />
                ))}
            </section>
            <div className="flex relative justify-end items-center">
                <FancyLink href="/projects" title="See More" />
            </div>
        </Section>
    );
};

export default Showcase;
