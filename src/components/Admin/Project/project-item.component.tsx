import { FC, memo } from "react";
import { Edit, Trash } from "react-feather";
import { connect } from "react-redux";
import { compose } from "redux";
import { iconProps } from "../../../Helpers/State/state.helper";
import { projectDeletedStarted } from "../../../Store/Reducers/ponikar/projects/projects.actions";
import { ProjectProps } from "../../../Store/Reducers/ponikar/projects/projects.types";
import ShowcaseItem from "../../Index/showcase-item.component";
import FancyLink from "../../Link/link.component";


interface ProjectItemProps extends ProjectProps {
    projectDeletedStarted?: (payload :ProjectProps) => void;
}


const ProjectItem:FC<ProjectItemProps> = ({ children, projectDeletedStarted ,...props }) => {

    const { id, title, description } = props;

    return <section className="bg-white font-primary rounded-primary">
        <ShowcaseItem {...props} />
        <div className="flex items-center p-2 justify-between">
            <h3 className="text-base"> {title} </h3>
            <div className="flex  items-center">
                <Trash onClick={_ => projectDeletedStarted(props)} {...iconProps}  size={18} />
                <FancyLink href={`/ponikar/projects/${id}`}> <Edit {...iconProps} size={18}  /> </FancyLink>
            </div>
        </div>
        <p className="px-2 pb-2 text-xs text-highlight">
            { description.substring(0, 75) }
        </p>
    </section>
};

const mapStateToDispatch = dispatch => ({
    projectDeletedStarted: payload => dispatch(projectDeletedStarted(payload))
});


export default compose(connect(null, mapStateToDispatch), memo)(ProjectItem);