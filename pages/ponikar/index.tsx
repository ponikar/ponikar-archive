import { FC, useCallback, useEffect } from "react";
import { userStartSignin } from "../../src/Store/Reducers/User/user.actions";
import { connect } from "react-redux"
import { USER_INTIAL_STATE_TYPE } from "../../src/Store/Reducers/User/user.types";

// const Auth = FirebaseAuth();
interface PonikarProps {
    userStartSignin?: () => void;
    user?: USER_INTIAL_STATE_TYPE
}

const Ponikar:FC<PonikarProps> = ({ userStartSignin, user }) => {
    useEffect(() => {
        // TODO: showpop if admin hasn't been logged in
        // userStartSignin();
    }, []);

    console.log(user);


    return <button onClick={_ => userStartSignin()}> Hello </button>
}


const mapStateToDispatch = dispatch => ({
    userStartSignin: _ => dispatch(userStartSignin("USER_SINGING_START"))
});

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, mapStateToDispatch)(Ponikar);