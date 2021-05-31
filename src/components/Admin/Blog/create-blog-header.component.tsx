import { FC, useCallback, useContext } from "react";
import { useSelector } from "react-redux";
import { storeBlog } from "../../../../Firebase/firestore/blogs.firestore";
import { CreateBlogContext } from "../../../Context/create-blog.context";
import { selectUser } from "../../../Store/Reducers/User/users.selectos";
import { MediumButton } from "../../Button/button.component";
import BlogTitle from "../../Create-Blog/blog-title.component";




const CreateBlogHeader:FC<{}> = ({  }) => {

    const { title, setProps, article, fileRef, tags } = useContext(CreateBlogContext);
    const { uid } = useSelector(selectUser);
    const openFiles = useCallback(() => {
        fileRef.current.click();
    }, [fileRef, article]);

    const publishPost = useCallback(async () => {
        try {
            if(article && title) {
                await storeBlog({ title, article, uid, tags  });
                console.log("Blog has been created");
                setProps({ title: "", article: "", tags: [] });
             }
        } catch(e) {    
            console.log("COULDN'n upload blog");
        }
    }, [title, article]);

    return <nav className="w-full absolute top-0 left-0 bg-white">
        <div className="w-8/12 mx-auto flex items-center justify-between p-2">
            <BlogTitle title={title} onChange={setProps} />
            <div> 
                <MediumButton onClick={openFiles} secondary  title="Add Image" />
                <MediumButton onClick={publishPost} className="ml-2" title="Publish" />
            </div>
        </div>
    </nav>
}

export default CreateBlogHeader;