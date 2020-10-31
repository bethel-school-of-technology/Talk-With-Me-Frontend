import React from 'react';
import Banner from '../components/Banner';
import GroupBox from '../containers/GroupBox';
import LoginForm from '../containers/LoginForm';

// This is HomePage
export default function HomePage() {


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
                    <LoginForm />
                </div>

            </div> 
        </div>
    )
}