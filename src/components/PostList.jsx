import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = (props) => {

    if(!props.posts.length){
        return (
            <div className="posts__not__found">Posts not found!</div>
        )
    }

    return (
        <div>
            <p className="title__post-list">{props.title}</p>
            <TransitionGroup>
                {props.posts.map((post, index) =>
                    <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem
                            index={index}
                            post={post}
                            remove={props.remove}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;