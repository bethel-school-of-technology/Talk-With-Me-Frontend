import React from 'react';
import GroupPosts from './GroupPosts';
import Post from './Post';

//import { groups } from '../dummyGroups';

const PostLists = ({ posts }) => {
    const postComponent = posts.map((user, i) => {
        return (
            <Post
                title={posts[i].title}
                body={posts[i].body}
            
            />
           
           
        );
    });


    return (
        <div className='' style={{ overflowX: 'scroll', height: '400px', width: '100%' }}>
            { postComponent}
        </div>
    )
}


export default PostLists;