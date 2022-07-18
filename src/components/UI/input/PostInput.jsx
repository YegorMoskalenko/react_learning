import React from 'react';
import classes from './PostInput.module.css'

// const PostInput = React.forwardRef((props, bodyInputRef) => {
const PostInput = (props) => {
    return (
        <input className={classes.postInput}  {...props}/>
        // <input ref={bodyInputRef} className={classes.postInput} {...props} />
    );
};
// });

export default PostInput;