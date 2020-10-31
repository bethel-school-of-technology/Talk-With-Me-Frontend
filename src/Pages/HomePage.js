import React from 'react';
import Banner from '../components/Banner';
import GroupBox from '../containers/GroupBox';
import LoginForm from '../containers/LoginForm';
import SignUpForm from '../containers/SignUpForm';



// This is HomePage
export default function HomePage() {

var isLogin = 0;
    return (
        <div>
            <div>
                <Banner />
            </div>

            <div className='flex'>
                <div>
                    <GroupBox />
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
        </div>
    )
}


