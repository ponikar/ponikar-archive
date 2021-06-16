import { useRouter } from "next/dist/client/router";
import { FC, useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProjectFirestore } from "../../../Firebase/firestore/projects.firestore";
import AdminPageContainer from "../../../src/components/Admin/Container/container.component";
import ProjectForm from "../../../src/components/Admin/Project/project-form.component";
import { updateProjectStarted } from "../../../src/Store/Reducers/ponikar/projects/projects.actions";
import { ProjectProps, PROJECT_DEFAULT_STATE } from "../../../src/Store/Reducers/ponikar/projects/projects.types";



interface UpdateProjectProps {
    updateProjectStarted?: (object) => void; 
}


const UpdateProject:FC<UpdateProjectProps> = ({ updateProjectStarted }) => {

    const [project, setProject] = useState<ProjectProps>(PROJECT_DEFAULT_STATE);

    const { query: { project_id }, replace } = useRouter();
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

    const submitCallback = useCallback(_ => {
        updateProjectStarted(project);
        replace("/ponikar/projects");
    }, [project]);

    return <AdminPageContainer>
        <ProjectForm {...{project, setProject}} submitCallback={submitCallback} />
    </AdminPageContainer>
}

const mapStateToDispatch = dispatch => ({
    updateProjectStarted: payload => dispatch(updateProjectStarted(payload))
})

export default connect(null, mapStateToDispatch)(UpdateProject);