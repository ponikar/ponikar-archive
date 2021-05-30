import { FC, useRef, useState } from "react";
import AdminPageContainer from "../../src/components/Admin/Container/container.component";
import PrimaryButton, { MediumButton } from "../../src/components/Button/button.component";
import { TextArea, TextInput } from "../../src/components/Input/input.component";
import { FlexCenter } from "../../src/TailwindClasses/flex.classes";


interface ProjectProps  {
    title: string;
    description: string;
    github_url: string;
    site_url: string;
    images: string[];
}

const PROJECT_DEFAULT_STATE :ProjectProps = {
    title: "",
    description: "",
    github_url: "",
    site_url: "",
    images: []
}


const CreateProject :FC<{}> = () => {

    const [project, setProject] = useState<ProjectProps>(PROJECT_DEFAULT_STATE);
    const fileRef = useRef(null);
    
    return <AdminPageContainer>
      <div className={`${FlexCenter} h-screen`}>
      <div className="bg-white mx-auto rounded-highlight py-12 lg:mt-0 md:mt-0 mt-56 lg:w-6/12 w-11/12">
      <h2 className="font-secondary text-xl text-center"> Showcase </h2>
        <form className="w-10/12 mx-auto">
        <input type="file" hidden />
            <MediumButton secondary title="Add Images"  />
            <TextInput label="Project name" inputClassName="bg-white" />   
            <TextInput label="Project Link" inputClassName="bg-white" />   
            <TextInput label="Project Github Link" inputClassName="bg-white" />
            <TextArea label="Project Description" inputClassName="bg-white" />   
            <PrimaryButton title="Add to Showcase" className="w-full" />
        </form>
     </div>
      </div>
    </AdminPageContainer>
}

export default CreateProject;