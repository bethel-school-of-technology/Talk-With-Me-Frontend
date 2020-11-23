import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import PostBox from '../containers/PostBox';
import WelcomePage from '../components/Group/WelcomePage';
import NavBar from '../components/Group/NavBar';
import GroupPosts from '../components/Posts/GroupPosts';
import Group from '../components/Group/Group';
import CreateGroup from '../components/Group/CreateGroup';
import CreatePost from '../components/Posts/CreatePosts';
import Post from '../components/Posts/Post';
import PostLists from '../components/Posts/PostLists';





// This is HomePage
export default function GroupPage({ groupInfo }) {

    const [route, setRoute] = useState('welcome');

    const onRouteChange = (currentRoute) => {
        setRoute(currentRoute);

    }
 

    return (
        <div>
            <div>
                {/* The title has to be brought from the database and display their names */}
                <Banner title={groupInfo.name} />
            </div>

            <div className='flex'>
                <div className='w-20'>

                    <NavBar onRouteChange={onRouteChange} />

                </div>
                {route === 'welcome'
                    ? <div className='w-80'>
                        <WelcomePage />
                    </div>


                    : ( route === 'Create Post'
                    ?<div className='w-80'><CreatePost onRouteChange={onRouteChange} /></div>
                    : <div>

                      
                           <GroupPosts />


                        </div>)








    
})

            
            </div>
        </div>
    )
}


