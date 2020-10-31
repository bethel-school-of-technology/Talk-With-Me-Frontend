import React from 'react';
import Banner from '../Components/Banner';
import GroupBox from '../Containers/GroupBox';
import LoginForm from '../Containers/LoginForm';


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