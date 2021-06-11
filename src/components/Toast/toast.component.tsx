import { FC, useEffect } from "react";
import { AlertTriangle } from "react-feather";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { hideToast } from "../../Store/Reducers/Toast/toast.actions";
import { selectToast } from "../../Store/Reducers/Toast/toast.selectors";
import { ToastTypes } from "../../Store/Reducers/Toast/toast.types";



interface ToastPropsTypes {
    toast?: ToastTypes
    hideToast?: () => void;
}


const Toast:FC<ToastPropsTypes> = ({ hideToast ,toast: { show, message, type } }) => {

    useEffect(() => {
        if(show) {
            setTimeout(() => hideToast(), 5000);
        }
    }, [show]);

    if(!show) return <div />;

    return <div className={`lg:w-2/12 items-center flex max-w-xs text-base z-30 text-white  ${type == "success" ? "bg-primary" : "bg-red"} m-5 rounded-primary w-11/12 fixed bottom-0 left-0 p-3`}>
        { AlertTriangle && <AlertTriangle className="mr-2" size={18} /> }
       { message }
    </div>
}

const mapDispatchToProps = dispatch => ({
    hideToast: _ => dispatch(hideToast({}))
});

const mapStateToProps = createStructuredSelector({
    toast: selectToast
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Toast);