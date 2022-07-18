import React, {useState} from 'react';
import PostInput from "./UI/input/PostInput";
import PostButton from "./UI/button/PostButton";

const PostForm = (props) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        props.create(post)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/* Управляемый компонент */}

            <PostInput
                value={post.title}
                type="text"
                placeholder="Write a title"
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <PostInput
                value={post.body}
                type="text"
                placeholder="Write a description"
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <PostButton onClick={addNewPost}>Create post</PostButton>
        </form>
    );
};

export default PostForm;