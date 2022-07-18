import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchByPostId, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost( await response.json())
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments( await response.json())
    })

    let idForFetch = +params.index + 1

    useEffect(() => {
        fetchByPostId(idForFetch)
        fetchComments(idForFetch)
    }, [])

    return (
        <div>
            <h1>You have opened the post page with ID = {+params.index + 1}</h1>
            {isLoading === true
                ? <Loader />
                : <div>{post.title}</div>
            }
            <h1>Comments</h1>
            {isComLoading === true
                ? <Loader />
                : <div>
                    {comments.map((comment, index) =>
                        <div style={{marginTop: 15}} key={index}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;