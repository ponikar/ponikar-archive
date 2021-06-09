import style from "../../../../styles/create-blog.module.css"
import { MediumButton } from "../../Button/button.component"
import { ChangeEvent, FC, memo, useCallback, useContext, useRef } from "react"
import { CreateBlogContext, CREATE_BLOG_INITIAL_STATE } from "../../../Context/create-blog.context"
import { compose } from "redux"
import { connect } from "react-redux"
import { ToastTypes  } from "../../../Store/Reducers/Toast/toast.types"
import { showToast } from "../../../Store/Reducers/Toast/toast.actions"
import { storeBlog, updateBlog } from "../../../../Firebase/firestore/blogs.firestore"
import { uploadImage } from "../../../../Firebase/firestore/blogs.storage"
import { BackPressContext } from "../../BackPresser/back-presser.context"
import { isRemoteURL } from "../../../../Firebase/firestore/firestore.helper"
import { useRouter } from "next/dist/client/router"


interface CreateBlogConfirmationProps {
    showToast?: (payload: ToastTypes) => void;
    setShowPreview?: (bool:boolean) => void;
}


const CreateBlogConfirmation:FC<CreateBlogConfirmationProps> = ({ showToast, setShowPreview }) => {

    const { back } = useRouter();

    const { setAnyBackProps } = useContext(BackPressContext);

    const createBlogProps = useContext(CreateBlogContext);
    
    const { preiview_image, description, setProps, title, article, tags, id } = createBlogProps;

    const fileRef = useRef<HTMLInputElement>(null);
    
    const openFile = useCallback(() => fileRef.current.click(), [fileRef]);

    const selectFile = useCallback((e :ChangeEvent<HTMLInputElement>) => {
        setProps({ preiview_image: URL.createObjectURL(e.target.files[0]) })
    }, []);

    const publishBlog = useCallback(async () => {
       try {
        if(!description) return showToast({ message: "Given Fields are required", type: "danger" });

        showToast({ message: "Publishing blog", type: "success" });
        let publicURL = preiview_image || "";
        if(preiview_image && !isRemoteURL(preiview_image)) {
            publicURL = await uploadImage(preiview_image);
        }
        const props = { title, article, tags, description, preview_image: publicURL };

        if(!id) {
            // create blog
            await storeBlog(props);
            setProps(CREATE_BLOG_INITIAL_STATE);
        } else {
            // update blog
            await updateBlog(id, props);
            back();
        }

        showToast({ message: "Blog has been published!", type: "success" });
        setAnyBackProps({ show:false });
        setShowPreview(false);
       } catch(e) {
          showToast({ message: e.message, type: "danger" });
       }
    }, [title, article, preiview_image, description, tags]);

    return <div className="lg:w-4/12 border-bcolor font-primary border z-30 fixed-center p-3 bg-white rounded-primary">
    <input type="file" hidden  ref={fileRef} onChange={selectFile} />
    { preiview_image &&  <img src={preiview_image} className="object-cover w-full" /> }
     <textarea value={description} onChange={e => setProps({ description: e.target.value })} className={style.article_description} placeholder="Add Description about your blog!" />
     <div className="flex">
        <MediumButton onClick={publishBlog} title="Publish" />
        <MediumButton onClick={openFile} className="ml-2" secondary title={`${preiview_image ? "Edit" : "Add"} Preview Image`} />
     </div>
    </div>
}


const mapDispatchToProps = dispatch => ({
    showToast: (payload: ToastTypes) => dispatch(showToast({ type: "SHOW_TOAST", payload }))
})

export default compose(connect(null, mapDispatchToProps))(CreateBlogConfirmation);
