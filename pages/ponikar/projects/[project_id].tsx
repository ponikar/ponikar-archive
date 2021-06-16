import { useRouter } from "next/dist/client/router";
import { FC, useCallback, useEffect, useState } from "react";
import { getProjectFirestore } from "../../../Firebase/firestore/projects.firestore";
import AdminPageContainer from "../../../src/components/Admin/Container/container.component";
import ProjectForm from "../../../src/components/Admin/Project/project-form.component";
import { ProjectProps, PROJECT_DEFAULT_STATE } from "../../../src/Store/Reducers/ponikar/projects/projects.types";





const UpdateProject:FC = () => {

    const [project, setProject] = useState<ProjectProps>(PROJECT_DEFAULT_STATE);

    const { query: { project_id } } = useRouter();
    useEffect(() => {
         getProject();
    }, [project_id]);

    const getProject = useCallback(async () => {
        if(project_id) {
            const result = await getProjectFirestore(project_id);
            console.log("PRJECT", result);
            setProject(result);
        }
    }, [project_id]);

    return <AdminPageContainer>
        <ProjectForm {...{project, setProject}} submitCallback={project => console.log(project)} />
    </AdminPageContainer>
}

export default UpdateProject;