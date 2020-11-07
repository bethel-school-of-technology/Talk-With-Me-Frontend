import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import GroupBox from '../containers/GroupBox';
import TheForm from '../containers/TheForm';
import PostBox from '../containers/PostBox';



// This is HomePage
export default function HomePage() {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [count, setCount] = useState(0);
    const checkSignin = (status) => {

    }
    const increaseCount = (isTrue) => {
        if(isTrue){
            setCount(1);
            console.log(setCount);
            console.log('Increased Count');
        }
        else {
            setCount(0);
            console.log('Set Count to 0');
        }
    }

    return (
        <div>
            <div>
                <Banner title={"Home"}/>
            </div>

            <div className='flex'>
                <div>
                    <GroupBox signInStatus={isSignedIn} />
                </div>

                <div>

                    <TheForm count={increaseCount} count1={count} />




                    {/* <LoginForm /> */}

                </div>

            </div>
            <div>
                <PostBox />
            </div>
        </div>
    )
}


