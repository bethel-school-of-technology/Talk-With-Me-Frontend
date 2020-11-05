import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import GroupBox from '../containers/GroupBox';
import LoginForm from '../containers/LoginForm';
import PostBox from '../containers/PostBox';
import SignUpForm from '../containers/SignUpForm';



// This is HomePage
export default function HomePage() {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [count, setCount] = useState(0);
    const checkSignin = (status) => {

    }
    const increaseCount = (isTrue) => {
        if(isTrue){
            setCount++;
            console.log('Increased Count');
        }
        else {
            setCount = 0;
            console.log('Set Count to 0');
        }
    }

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
                        count === 1 ? (
                            <div>
                                <LoginForm count={ increaseCount } />
                            </div>
                        ) : (
                                <div>
                                    <SignUpForm count={ increaseCount }/>
                                </div>
                            )}




                    {/* <LoginForm /> */}

                </div>

            </div>
            <div>
                <PostBox />
            </div>
        </div>
    )
}


