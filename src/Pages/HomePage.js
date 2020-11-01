import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import GroupBox from '../containers/GroupBox';
import LoginForm from '../containers/LoginForm';
import PostBox from '../containers/PostBox';
import SignUpForm from '../containers/SignUpForm';



// This is HomePage
export default function HomePage() {

    const [isSignedIn, setIsSignedIn] = useState(false);

    const checkSignin = (status) => {

    }

var isLogin = 0;
    return (
        <div>
            <div>
                <Banner />
            </div>

            <div className='flex'>
                <div>
                    <GroupBox signInStatus={isSignedIn} />
                </div>

            <div>
                    
                    {
                        isLogin === 1
                        ? <div>
                            <LoginForm />
                        </div>
                        : (
                            <div>
                                <SignUpForm />
                            </div>
                        )
                }
                    
                    
                    
                    
                    {/* <LoginForm /> */}

                </div>

            </div> 
            <div>
                <PostBox />
            </div>
        </div>
    )
}


