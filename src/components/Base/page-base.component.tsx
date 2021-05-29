import { FC, ReactNode, useEffect } from "react"
import { connect } from "react-redux"
import { FirebaseAuth } from "../../../Firebase/firebase.config"
import { userLoggedIn, userLoggedOut } from "../../Store/Reducers/User/user.actions"
import { responsiveContainer } from "../../TailwindClasses/responsive.classes"
import Footer from "../Footer/footer.component"
import Header from "../Header/header.component"

interface PageBaseTypes {
    userLoggedIn?: (payload:object) => void;
    userLoggedOut?: () => void;
    children: ReactNode;
}


const PageBase: FC<PageBaseTypes> = ({ children, userLoggedIn, userLoggedOut }) => {

    useEffect(() => {
       const unsubscribe = FirebaseAuth().onAuthStateChanged((user) => {
            if(!user) return userLoggedOut();
            userLoggedIn({
                displayName: user.displayName,
                photoURL: user.photoURL,
                uid: user.uid,
                email: user.email
            });
        });

        return () => unsubscribe();
    }, []);

    return <>
     <div className={responsiveContainer}>
    <Header />
    { children }
    </div>
    <Footer />
    </>
}

const mapStateToDispatch = dispatch => ({
    userLoggedIn: payload => dispatch(userLoggedIn({ payload })),
    userLoggedOut: _ => dispatch(userLoggedOut("USER_LOGOUT"))
});

export default connect(null, mapStateToDispatch)(PageBase);