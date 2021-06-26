import Link from 'next/link';
import { FC, memo } from 'react';
import { Edit, Trash } from 'react-feather';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ponikarBlogDeleteStarted } from '../../../Store/Reducers/ponikar/Blogs/blogs.actions';
import { BlogPreviewProps } from '../../Blog/blog-preview-item.component';
import { MediumButton } from '../../Button/button.component';

interface AdminBlogPreviewProps {
    ponikarBlogDeleteStarted?: (id: string) => void;
}

const AdminBlogPreview: FC<AdminBlogPreviewProps & BlogPreviewProps> = ({
    ponikarBlogDeleteStarted,
    title,
    description,
    id,
}) => {
    return (
        <div className="w-full p-3 bg-white flex justify-between">
            <div className="flex flex-col justify-between">
                <h2 className="text-xl"> {title} </h2>
                <p className="mt-3 text-sm"> {description} </p>

                <div>
                    <MediumButton className="mt-3" title="View Blog" />
                </div>
            </div>

            <div className="flex">
                <Trash
                    onClick={(_) => ponikarBlogDeleteStarted(id)}
                    className="mr-2"
                    size={18}
                />
                <Link passHref href={`/ponikar/blogs/${id}`}>
                    <a>
                        {' '}
                        <Edit size={18} />{' '}
                    </a>
                </Link>
            </div>
        </div>
    );
};

const mapStateToDispatch = (dispatch) => ({
    ponikarBlogDeleteStarted: (id) => dispatch(ponikarBlogDeleteStarted(id)),
});

export default compose(
    connect(null, mapStateToDispatch),
    memo
)(AdminBlogPreview);
