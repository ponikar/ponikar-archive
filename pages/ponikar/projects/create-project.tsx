import {  FC, useState } from "react";
import { storeProject } from "../../../Firebase/firestore/projects.firestore";
import AdminPageContainer from "../../../src/components/Admin/Container/container.component";
import ProjectForm from "../../../src/components/Admin/Project/project-form.component";
import { ProjectProps, PROJECT_DEFAULT_STATE } from "../../../src/Store/Reducers/ponikar/projects/projects.types";







const CreateProject :FC<{}> = () => {

    const [project, setProject] = useState<ProjectProps>(PROJECT_DEFAULT_STATE);


    return <AdminPageContainer>
      <ProjectForm 
        project={project}
        setProject={setProject}
        submitCallback={storeProject}
      />
    </AdminPageContainer>
}

export default CreateProject;