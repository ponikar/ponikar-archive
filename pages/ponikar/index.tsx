import { FC } from "react";
import { connect } from "react-redux"
import { USER_INTIAL_STATE_TYPE } from "../../src/Store/Reducers/User/user.types";
import { compose } from "redux";
import { AdminMiddleware } from "../../src/Middlewares/admin.middleware";
import PageBase from "../../src/components/Base/page-base.component";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../../src/Store/Reducers/User/users.selectos";
import { FirebaseAuth } from "../../Firebase/firebase.config";

interface PonikarProps {
    user?: USER_INTIAL_STATE_TYPE
}

const Ponikar:FC<PonikarProps> = ({ user }) => {

    return <PageBase>
        <div> <button onClick={_ => FirebaseAuth().signOut()}> Singout </button> </div>
    </PageBase>
}



const mapStateToProps = createStructuredSelector({
    user: selectUser
});

export default compose(AdminMiddleware,connect(mapStateToProps, null))(Ponikar);