import React from 'react';
import PostInput from "./UI/input/PostInput";
import PostSelect from "./UI/select/PostSelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className='sort__posts'>
            <PostInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Search...'
            />
            <PostSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sort'
                options={[
                    {value: 'title', name: 'By title'},
                    {value: 'body', name: 'By description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;