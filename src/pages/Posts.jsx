import React, {useState, useEffect, useRef} from "react";
import PostList from "../components/PostList"
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostModal from "../components/UI/modal/PostModal";
import PostButton from "../components/UI/button/PostButton";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from '../hooks/useFetching'
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import PostSelect from "../components/UI/select/PostSelect";

function Posts() {
    const [posts, setPosts] = useState([
        // {title: 'вв', body: 'бб'},
        // {title: 'аа', body: 'вв'},
        // {title: 'бб', body: 'аа'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const responseJson = await PostService.getAll(page, limit)
        const response = await responseJson.json()
        setPosts([...posts, ...response])
        const totalCount = responseJson.headers.get('x-total-count')
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        console.log('Obs')
        setPage(page + 1)
        console.log(page)
    })

    useEffect( () => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (postIndex) => {
        setPosts([...sortedAndSearchedPosts].filter((p, index) => sortedAndSearchedPosts[index] !== sortedAndSearchedPosts[postIndex]))
    }

    const changePage = page => {
        setPage(page)
    }

    return (
        <div className="App">
            <PostButton style={{marginTop: '20px'}} onClick={() => setModal(true)}>Create post</PostButton>
            <PostModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} posts={posts}/>
            </PostModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostSelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Amount of posts on the page'
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: -1, name: 'All'}
                ]}
            />
            {postError &&
            <h1>Error! - ${postError}</h1>
            }
            <PostList posts={sortedAndSearchedPosts} title="Post List" remove={removePost}/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}/>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div>
            }
            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
        </div>
    );
}

export default Posts;
