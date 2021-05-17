import Section from "../section/section.component";





const FooterLeft = () => {
    return <Section isContainer className="flex font-secondary justify-center flex-col text-white flex-1">
       <div className="w-10/12 mx-auto">
       <h1 className="text-3xl">DP</h1>
        <section>
            <header className="text-xl"> Links </header>
            
            <div className="my-3 flex flex-col">
                <a className="text-md my-1"> Home </a>
                <a className="text-md my-1"> Home </a>
                <a className="text-md my-1"> Home </a>
                <a className="text-md my-1"> Home </a>
            </div>
        </section>
       </div>
    </Section>
}

export default FooterLeft;