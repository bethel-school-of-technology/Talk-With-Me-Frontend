import React from 'react';
import Post from './Post';
//import { groups } from '../dummyGroups';

const PostLists = ({ posts }) => {
    const postComponent = posts.map((user, i) => {
        return (
            <Post
                id={posts[i]._id}
            />
        );
    });


    return (
        <div className='' style={{ overflowX: 'scroll', height: '400px' }}>
            { postComponent}
        </div>
    )
}


export default PostLists;