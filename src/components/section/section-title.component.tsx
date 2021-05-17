import { FC } from "react";

interface SectionTitleProps {
    title: string;
    className?: string;
}



const SectionTitle :FC<SectionTitleProps> = ({ title, className = "" }) => {
   return <h2 className={`${className} lg:text-3xl text-2xl font-secondary`}> { title } </h2>
}

export default SectionTitle;