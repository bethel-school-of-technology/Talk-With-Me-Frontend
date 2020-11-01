import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
//import Group from '../components/Group';
import PostList from '../components/Posts/PostLists';
//import './App.css';
import { exportedgroups } from '../dummyGroups';

function PostBox() {


    const [posts, setPosts] = useState([]);
    const [searchfield, setSearchfield] = useState('');



    useEffect(() => {
        // fetch('../dummyGroups.json') //place holder for now
        //     .then(response => response.json())
        //     .then(users => { setGroups(users) });

        setPosts(exportedgroups);

    }, []);

    console.log(posts);
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }
    const filteredPosts = posts.filter(posts => {
        return posts.about.includes(searchfield);
    });

    return (
        <div className='PostBox'>
            <div className='flex'>
                <div className='flex flex-column'>
                    <div className='flex justify-start fw1 f3'>
                        Posts
                        </div>
                    <div className='flex justify-start'>
                        <SearchBox searchChange={onSearchChange} />
                    </div>
                    <div className='PostList'>
                        <PostList posts={filteredPosts} />
                    </div>
                </div>
            </div>

        </div>
    );

}

export default PostBox;
