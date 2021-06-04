import { FC, useCallback, useContext, useState } from "react";
import { connect } from "react-redux";
import { CreateBlogContext } from "../../../Context/create-blog.context";
import { showToast } from "../../../Store/Reducers/Toast/toast.actions";
import { ToastTypes } from "../../../Store/Reducers/Toast/toast.types";
import { BackPressContext } from "../../BackPresser/back-presser.context";
import { MediumButton } from "../../Button/button.component";
import BlogTitle from "../../Create-Blog/blog-title.component";
import CreateBlogConfirmation from "./create-blog-confirmation.component";


interface CreateBlogHeaderPropsType {
    showToast: (payload: ToastTypes) => void;
}


const CreateBlogHeader:FC<CreateBlogHeaderPropsType> = ({ showToast }) => {

    const { title, setProps, article, fileRef, tags } = useContext(CreateBlogContext);
    const [showPreview, setShowPreview] = useState(false);
    const { setAnyBackProps } = useContext(BackPressContext);
    const openFiles = useCallback(() => {
        fileRef.current.click();
    }, [fileRef, article]);

    const publishPost = useCallback(async () => {
       if(!title || !article) return showToast({ message: "Complete your Article First", type: "danger" });
       
       setAnyBackProps({ show:true, onBackPress: () => setShowPreview(false) });
       setShowPreview(!showPreview);
    }, [title,article,showPreview, tags]);

    return <>
    <nav className="w-full absolute top-0 left-0 bg-white">
        <div className="w-8/12 mx-auto flex items-center justify-between p-2">
            <BlogTitle title={title} onChange={setProps} />
            <div> 
                <MediumButton onClick={openFiles} secondary  title="Add Image" />
                <MediumButton onClick={publishPost} className="ml-2" title={"Publish"} />
            </div>
        </div>
    </nav>
    { showPreview && <CreateBlogConfirmation setShowPreview={setShowPreview} /> }
    </>
}

const mapDispatchToProps = dispatch => ({
    showToast: (payload: ToastTypes) => dispatch(showToast({ type: "SHOW_TOAST", payload }))
})

export default connect(null, mapDispatchToProps)(CreateBlogHeader);