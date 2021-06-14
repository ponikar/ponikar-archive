import { ChangeEvent, FC, useCallback, useRef, useState } from "react";
import { storeProject } from "../../Firebase/firestore/projects.firestore";
import AdminPageContainer from "../../src/components/Admin/Container/container.component";
import ProjectPreviewImage from "../../src/components/Admin/Project/project-images-preview.component";
import PrimaryButton, { MediumButton } from "../../src/components/Button/button.component";
import { TextArea, TextInput } from "../../src/components/Input/input.component";
import { Loading } from "../../src/components/Loading/loading.component";
import { checkIfEmpty } from "../../src/Helpers/State/state.helper";
import { useFormHelpers } from "../../src/hooks/use-form-helpers.hook";
import { ProjectProps } from "../../src/Store/Reducers/ponikar/projects/projects.types";
import { FlexCenter } from "../../src/TailwindClasses/flex.classes";




const PROJECT_DEFAULT_STATE :ProjectProps = {
    title: "",
    description: "",
    github_url: "",
    site_url: "",
    images: []
}


const CreateProject :FC<{}> = () => {

    const [project, setProject] = useState<ProjectProps>(PROJECT_DEFAULT_STATE);
    const [toggleForm, setToggleForm] = useState(false);
    const [{ message, success, isLoading }, setHelpers, INIT_STATE] = useFormHelpers();

    const setAnyProps = (prop: string,e :ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProject({...project, [prop]: e.currentTarget.value});
    }

    const submitProject = async (e) => {
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
                await storeProject(project);
                setHelpers({ isLoading:false, success: true, message: "Project has been published" });
                setProject(PROJECT_DEFAULT_STATE);
                setToggleForm(false);
            }
         } catch(e) {
            setHelpers({ isLoading: false, message: e.message, success: false });
         }
    }

    return <AdminPageContainer>
      <div className={`${FlexCenter} h-screen`}>
      <div className="bg-white mx-auto rounded-highlight py-12 lg:mt-0 md:mt-0 mt-56 lg:w-6/12 w-11/12">
      <h2 className="font-secondary text-xl text-center"> Showcase </h2>

      { (message && !isLoading)&& <p className={`text-sm text-center ${success ? "text-green": "text-red"}`}> { message} </p> }
        <div className="w-10/12 mx-auto">
        { !toggleForm && <>
            <TextInput onChange={e => setAnyProps("title", e)} label="Project name*"  />   
            <TextInput type="url" onChange={e => setAnyProps("site_url", e)} label="Project Link"  />   
            <TextInput type="url" onChange={e => setAnyProps("github_url", e)} label="Project Github Link"  />
            <TextArea onChange={e => setAnyProps("description", e)} label="Project Description*"  />   
        </> 
        }
        { toggleForm && <ProjectPreviewImage images={project.images} setImages={props => setProject({...project, ...props})} /> }

       { isLoading ? <Loading /> : <PrimaryButton onClick={submitProject} title={toggleForm ? "Submit": "Add to Images"} className="w-full mt-3" /> }
        { toggleForm && <div className="text-center p-1 cursor-pointer" onClick={_ => setToggleForm(false)}> Go Back </div> }
        </div>
     </div>
      </div>
    </AdminPageContainer>
}

export default CreateProject;