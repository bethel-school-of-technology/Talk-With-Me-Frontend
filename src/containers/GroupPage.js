import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import PostBox from '../containers/PostBox';
import WelcomePage from '../components/Group/WelcomePage';
import NavBar from '../components/Group/NavBar';
import GroupPosts from '../components/Posts/GroupPosts';




// This is HomePage
export default function GroupPage() {

    const [route, setRoute] = useState('welcome');

    const onRouteChage = (currentRoute) => {
        setRoute(currentRoute);
    }


    return (
        <div>
            <div>
                {/* The title has to be brought from the database and display their names */}
                <Banner title={"Group Page"} />
            </div>

            <div className='flex'>
                <div>
                    <NavBar onRouteChage={onRouteChage} />
                </div>
                {route === 'welcome'
                    ? <div>
                        <WelcomePage />
                    </div>

                    : <div>
                        <GroupPosts />
                        <GroupPosts />
                        <GroupPosts />
                        <GroupPosts />
                    </div>
                }
            </div>
        </div>
    )
}


