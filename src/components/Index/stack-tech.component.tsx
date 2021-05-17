import SectionTitle from "../section/section-title.component";
import Section from "../section/section.component";
import ReactIcon from "../Stack-Tech-Icons/react-icon.component";
import CPPIcon from "../Stack-Tech-Icons/cplusplus.component";
import CssIcon from "../Stack-Tech-Icons/css3-icon.component";
import MongoIcon from "../Stack-Tech-Icons/mongod-icon.component";
import JSIcon from "../Stack-Tech-Icons/js-icon.component";
import MySqlIcon from "../Stack-Tech-Icons/mysql-icon.component";
import FigmaIcon from "../Stack-Tech-Icons/figma-icon.component";
import NodejsIcon from "../Stack-Tech-Icons/nodejs-icon.component";
import LaravelIcon from "../Stack-Tech-Icons/laravel.component";
import PhpIcon from "../Stack-Tech-Icons/php-icon.component";
import ExpressIcon from "../Stack-Tech-Icons/express-icon.component";
import Firebase from "../Stack-Tech-Icons/firebase.component";




const StackTech = () => {
    return <Section isContainer>
        <SectionTitle title="My Tools And Technologies" />
        <section className="lg:p-14 lg:mt-0 mt-6 p-0 grid md:grid-cols-5 grid-cols-1">
            <div className="col-span-2 w-10/12 lg:mx-0 mx-auto">
               <ReactIcon />
               <CssIcon />
               <CPPIcon />
               <MongoIcon />
            </div>
            <div className="flex lg:my-0 my-12 flex-col justify-between">
                <MySqlIcon />
                <JSIcon />
                <FigmaIcon />
            </div>
            <div className="col-span-2 lg:my-0 my-12 ml-14  w-10/12">
               <NodejsIcon />
               <LaravelIcon />
               <PhpIcon />
               <ExpressIcon />
               <Firebase />
            </div>
        </section>
    </Section>
}


export default StackTech;