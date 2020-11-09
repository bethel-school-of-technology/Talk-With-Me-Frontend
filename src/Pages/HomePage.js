import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import GroupBox from '../containers/GroupBox';
import LoginForm from '../containers/LoginForm';
import PostBox from '../containers/PostBox';
import SignUpForm from '../containers/SignUpForm';
import CreateGroup from '../components/Group/CreateGroup';
import ProfilePage from '../Pages/ProfilePage';



// This is HomePage
export default function HomePage() {

    const [isSignedIn, setIsSignedIn] = useState(false);

    const checkSignin = (status) => {

    }

    const [route, setRoute] = useState('home');

    //
    const onRouteChange = (currentRoute) => {
        setRoute(currentRoute);
    }

    var isLogin = 0;
    return (
        <div>

            { route === 'home'
                ? (
                    <div className='Home'>
                        <div>
                            <Banner title={"Home"} />
                        </div>
                        <div className='flex'>
                            <div>
                                <GroupBox signInStatus={isSignedIn} />
                            </div>
                            <div>
                                {/* {
                                    isLogin === 1
                                        ? <div>
                                            <LoginForm />
                                        </div>
                                        : (
                                            <div>
                                                <SignUpForm />
                                            </div>
                                        )
                                } */}
                                <ProfilePage onRouteChange={onRouteChange}/>
                            </div>
                        </div>
                        <div>
                            <PostBox />
                        </div>
                    </div>
                )
                : (

                    route === 'create_group'
                        ? <CreateGroup onRouteChange={onRouteChange}/>
                        : <ProfilePage />
                )


            }
        </div >
    )
}


