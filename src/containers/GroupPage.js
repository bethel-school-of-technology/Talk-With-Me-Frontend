import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import PostBox from '../containers/PostBox';
import WelcomePage from '../components/Group/WelcomePage';
import NavBar from '../components/Group/NavBar';
import GroupPosts from '../components/Posts/GroupPosts';
import Group from '../components/Group/Group';
import CreateGroup from '../components/Group/CreateGroup';
import CreatePost from '../components/Posts/CreatPosts';




// This is HomePage
export default function GroupPage() {

    const [route, setRoute] = useState('welcome');

    const onRouteChange = (currentRoute) => {
        setRoute(currentRoute);
    }


    return (
        <div>
            <div>
                {/* The title has to be brought from the database and display their names */}
                <Banner title={"Group Page"} />
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
                    ?<div className='w-80'><CreatePost/></div>
                    : <div>

                            <GroupPosts />
                            <GroupPosts />
                            <GroupPosts />
                            <GroupPosts />

                        </div>)







                }
                <div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}


