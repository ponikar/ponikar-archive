import { useRouter } from "next/dist/client/router";
import { FC, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { isAdminUID } from "../../src/Helpers/Auth/admin.helper";
import { userStartSignin } from "../../src/Store/Reducers/User/user.actions";
import { selectUser } from "../../src/Store/Reducers/User/users.selectos";

interface LetMeInType {
    userStartSignin: () => void;
}


const LetMeIn:FC<LetMeInType> = ({ userStartSignin }) => {
    const { uid, message } = useSelector(selectUser);
    const { replace } = useRouter();
    useEffect(() => {
       if(!uid) {
         userStartSignin();
       } else if(isAdminUID(uid)) {
         replace("/ponikar");
       } else {
         replace("/");
       }
    }, [uid]);

    return <>
      <div> You will be redirected... </div>
      { message && <p> {message} </p> }
    </>
}

const mapStateToDispatch = dispatch => ({
    userStartSignin: _ => dispatch(userStartSignin("USER_SINGING_START"))
})


export default connect(null, mapStateToDispatch)(LetMeIn);