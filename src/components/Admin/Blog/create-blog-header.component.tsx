import { FC, useCallback, useContext } from "react";
import { connect, useSelector } from "react-redux";
import { storeBlog } from "../../../../Firebase/firestore/blogs.firestore";
import { CreateBlogContext } from "../../../Context/create-blog.context";
import { useFormHelpers } from "../../../hooks/use-form-helpers.hook";
import { showToast } from "../../../Store/Reducers/Toast/toast.actions";
import { ToastTypes } from "../../../Store/Reducers/Toast/toast.types";
import { selectUser } from "../../../Store/Reducers/User/users.selectos";
import { MediumButton } from "../../Button/button.component";
import BlogTitle from "../../Create-Blog/blog-title.component";


interface CreateBlogHeaderPropsType {
    showToast: (payload: ToastTypes) => void;
}


const CreateBlogHeader:FC<CreateBlogHeaderPropsType> = ({ showToast }) => {

    const { title, setProps, article, fileRef, tags } = useContext(CreateBlogContext);
    const { uid } = useSelector(selectUser);
    const [{ isLoading }, setFormHelpers, FORM_HELPER_INITIAL_STATE] = useFormHelpers();
    const openFiles = useCallback(() => {
        fileRef.current.click();
    }, [fileRef, article]);

    const publishPost = useCallback(async () => {
        try {
            setFormHelpers({ isLoading: true });
            if(article && title) {
                await storeBlog({ title, article, uid, tags  });
                showToast({ message: "Blog has been published", type: "success" });
                setProps({ title: "", article: "", tags: [] });
                setFormHelpers({ isLoading: false });

             }
        } catch(e) {    
            setFormHelpers({ isLoading: false });
            showToast({ message: e.message, type: "danger" });

        }
    }, [title, article]);

    return <nav className="w-full absolute top-0 left-0 bg-white">
        <div className="w-8/12 mx-auto flex items-center justify-between p-2">
            <BlogTitle title={title} onChange={setProps} />
            <div> 
                <MediumButton onClick={openFiles} secondary  title="Add Image" />
                <MediumButton disabled={isLoading} onClick={publishPost} className="ml-2" title={isLoading ? "Publishing" : "Publish"} />
            </div>
        </div>
    </nav>
}

const mapDispatchToProps = dispatch => ({
    showToast: (payload: ToastTypes) => dispatch(showToast({ type: "SHOW_TOAST", payload }))
})

export default connect(null, mapDispatchToProps)(CreateBlogHeader);