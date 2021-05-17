import { FC } from "react";



interface SectionProps {
    className?:  string;
    isContainer?: boolean;
}

const Section :FC<SectionProps> = ({ children,  className = "", isContainer = false }) => {
    return <section className={`${className} lg:mt-24 mt-10 ${isContainer ? "lg:w-10/12 w-11/12 mx-auto" : "w-full"}`}>
        { children }
    </section>
}

export default Section;