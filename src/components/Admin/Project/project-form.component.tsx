import { ChangeEvent, FC, useState } from "react";
import { checkIfEmpty } from "../../../Helpers/State/state.helper";
import { useFormHelpers } from "../../../hooks/use-form-helpers.hook";
import { ProjectProps, PROJECT_DEFAULT_STATE } from "../../../Store/Reducers/ponikar/projects/projects.types";
import { FlexCenter } from "../../../TailwindClasses/flex.classes";
import PrimaryButton from "../../Button/button.component";
import { TextArea, TextInput } from "../../Input/input.component";
import { Loading } from "../../Loading/loading.component";
import ProjectPreviewImage from "./project-images-preview.component";


interface ProjectFormProps {
    project: ProjectProps,
    setProject: (object) => void,
    submitCallback: (object:ProjectProps) => void
}


const ProjectForm:FC<ProjectFormProps> = ({ project, setProject, submitCallback }) => {
    const [formHelpers, setHelpers, INIT_STATE] = useFormHelpers();
    const { isLoading, message, success } = formHelpers;
    const [toggleForm, setToggleForm] = useState(false);

    const { title, github_url, site_url, description } = project;

    const setAnyProps = (prop: string,e :ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProject({...project, [prop]: e.currentTarget.value});
    }


    const submitProject = async () => {
        try {
           setHelpers({ message: "" });
           if(!toggleForm) {
               if(!checkIfEmpty(project, ["title", "description",])) {
                   throw new Error("The given fields is required") 
               }
               setToggleForm(true);
           } else {
               // submit the form
               setHelpers({ isLoading: true });
               await submitCallback(project);
               setHelpers({ isLoading:false, success: true, message: "Project has been published" });
               setProject(PROJECT_DEFAULT_STATE);
               setToggleForm(false);
           }
        } catch(e) {
           setHelpers({ isLoading: false, message: e.message, success: false });
        }
   }

    return <>
     <div className={`${FlexCenter} h-screen`}>
      <div className="bg-white mx-auto rounded-highlight py-12 lg:mt-0 md:mt-0 mt-56 lg:w-6/12 w-11/12">
      <h2 className="font-secondary text-xl text-center"> Showcase </h2>

      { (message && !isLoading)&& <p className={`text-sm text-center ${success ? "text-green": "text-red"}`}> { message} </p> }
        <div className="w-10/12 mx-auto">
        { !toggleForm && <>
            <TextInput value={title} onChange={e => setAnyProps("title", e)} label="Project name*"  />   
            <TextInput value={site_url} type="url" onChange={e => setAnyProps("site_url", e)} label="Project Link"  />   
            <TextInput value={github_url} type="url" onChange={e => setAnyProps("github_url", e)} label="Project Github Link"  />
            <TextArea value={description} onChange={e => setAnyProps("description", e)} label="Project Description*"  />   
        </> 
        }
        { toggleForm && <ProjectPreviewImage images={project.images} setImages={props => setProject({...project, ...props})} /> }

       { isLoading ? <Loading /> : <PrimaryButton onClick={submitProject} title={toggleForm ? "Submit": "Add to Images"} className="w-full mt-3" /> }
        { toggleForm && <div className="text-center p-1 cursor-pointer" onClick={_ => setToggleForm(false)}> Go Back </div> }
        </div>
     </div>
      </div>
    </>
}

export default ProjectForm;