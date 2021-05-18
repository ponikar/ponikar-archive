import { FC } from "react";
import PageBase from "../src/components/Base/page-base.component";
import PrimaryButton from "../src/components/Button/button.component";
import {TextArea, TextInput} from "../src/components/Input/input.component";
import contactStyle from "../styles/contact.module.css"


const Contact :FC<{}> = () => {
    return <PageBase>
        <section className={`${contactStyle.container} flex justify-center items-center`}>
            <div className="bg-background rounded-highlight py-12 lg:w-6/12 w-11/12">
                <h2 className="font-secondary text-xl text-center"> reach me out </h2>
                <form className="lg:w-8/12 w-10/12 mx-auto">
                    <TextInput label="What's your Name?" placeholder="Jake Peralata" />
                    <TextInput label="What's your Email?" placeholder="jake@brooklyninenine.com" />
                    <TextArea rows={4} placeholder="I just wanna know something about..." label="Tell me Something!" />
                    <PrimaryButton title="Say Hi!"  className="w-full" />
                </form>
            </div>      
        </section>
    </PageBase>
}


export default Contact;