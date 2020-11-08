import React from 'react';
import GroupPost from './GroupPosts';
import '../CSS/PostsPage.css';

const PostsPage = () => {

    return (
        <div class="flex flex-column">
            {/* This will need to have the navigation section placed into it */}

            <div class="flex" className=' tl pa3 ma3'>
                <a className=''>Hello there</a>
                <div class="sidebar">
                    <a className=''>Hi there</a>
                </div>
                <div class="sidebar">
                    <a className=''>Hey there</a>
                </div>
                <div class="sidebar">
                    <a className=''>what is up</a>
                </div>
                <div class="sidebar">
                    <button>CREATE POST</button>
                </div>




                <GroupPost />
                <GroupPost />
                <GroupPost />
                <GroupPost />
                <GroupPost />
            </div>
        </div>
    )
}

export default PostsPage;