import { FC } from "react";



const AdminPageContainer :FC<{}> = ({ children  }) => {
    return <main className="w-10/12 mx-auto">
        { children }
    </main>
}


export default AdminPageContainer;