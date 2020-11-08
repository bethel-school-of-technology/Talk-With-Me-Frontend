import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import PostBox from '../containers/PostBox';
import WelcomePage from '../components/Group/WelcomePage';
import NavBar from '../components/Group/NavBar';




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
                <div className='w-20'>
                    <NavBar onRouteChage={onRouteChage} />
                </div>
                {route === 'welcome'
                    ? <div className='w-80'>
                        <WelcomePage />
                    </div>

                    : <div className='w-80'>
                        <PostBox />
                    </div>
                }
            </div>
        </div>
    )
}


