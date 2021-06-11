import { FC } from "react";
import AdminNavigaton from "../Navigations/navigation.component";



const AdminPageContainer :FC<{}> = ({ children  }) => {
    return <main className="w-10/12 mx-auto">
        <AdminNavigaton />
        { children }
    </main>
}


export default AdminPageContainer;