import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { FirebaseAuth } from "../../Firebase/firebase.config";
import { isAdminUID } from "../Helpers/Auth/admin.helper";
import { selectUser } from "../Store/Reducers/User/users.selectos"

interface HelperType {
    isLoading: boolean;
}


const INITIAL_PROPS:HelperType = {
    isLoading: false,
}

export const AdminMiddleware = AdminComponent => props => {
    const { uid } = useSelector(selectUser);
    const [helper, setHelper] = useState<HelperType>(INITIAL_PROPS);
    const { replace } = useRouter();

    const { isLoading } =  helper;

    useEffect(() => {
        setHelper({ isLoading: true });
        if(isAdminUID(uid)) {
           // redirect to the home page.
           replace("/");
        } else {
            setHelper({ isLoading: false });
        }
    }, [FirebaseAuth().currentUser]);


    if(isLoading) return <div> Loading... </div>

    return <AdminComponent {...props} />
}