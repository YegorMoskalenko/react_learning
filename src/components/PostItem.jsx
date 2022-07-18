import React from 'react';
import PostButton from "./UI/button/PostButton";
import {useHistory} from "react-router-dom";

const PostItem = (props) => {
    const router = useHistory()

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <PostButton onClick={() => router.push(`/posts/${props.index}`)}>Open</PostButton>
                <PostButton style={{marginLeft: 8}} onClick={() => props.remove(props.index)}>Remove</PostButton>
            </div>
        </div>
    );
};

export default PostItem;