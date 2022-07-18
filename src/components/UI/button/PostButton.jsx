import React from 'react';
import classes from "./PostButton.module.css";

const PostButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.postBtn}>
            {/*{props.createPost}*/}
            {children}
        </button>
    );
};

export default PostButton;