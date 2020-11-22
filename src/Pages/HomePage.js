import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import PostsPage from '../components/Posts/PostsPage';
import GroupBox from '../containers/GroupBox';
import TheForm from '../containers/TheForm';
import PostBox from '../containers/PostBox';
/* import SignUpForm from '../containers/SignUpForm'; */
import CreateGroup from '../components/Group/CreateGroup';
import ProfilePage from '../Pages/ProfilePage';
import GroupPage from '../containers/GroupPage';
import userEvent from '@testing-library/user-event';






// This is HomePage
export default function HomePage({ loadUser, wholeState }) {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [groupInfo, setGroupInfo] = useState({
        name: '',
        description: '',
        likes: 0,
        members: 0
    });
    const [route, setRoute] = useState('home');
    const [count, setCount] = useState(0);

   

    const onCreateGroup = (group) => {
        const newGroupInfo = {
            name: group.group.name,
            description: group.group.description,
            likes: 0,
            members: 1
        };
        console.log(newGroupInfo);
        setGroupInfo(newGroupInfo);
        setRoute('group_page');
        console.log("onCreateGroup", groupInfo.name , groupInfo.description)
        console.log("information");
        console.log(groupInfo);
        console.log(group.group.name);
    }
    console.log('after running the function');
    console.log(groupInfo);

    //
    const onRouteChange = (currentRoute) => {
        setRoute(currentRoute);
    }
    
    return (
        <div>

            { route === 'home'
                ? (
                    <div className='Home'>
                        <div>
                            <Banner title={"Home"} />
                            <h1>{wholeState.user.email}</h1>
                            <TheForm loadUser={loadUser}/>
                        </div>
                        <div className='flex'>
                            <div>
                                <GroupBox signInStatus={isSignedIn} />
                            </div>
                            <div>
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
                        ? <CreateGroup onRouteChange={onRouteChange} onCreateGroup={onCreateGroup}/>
                        : <GroupPage />
                )


            }
        </div >

    )
}


