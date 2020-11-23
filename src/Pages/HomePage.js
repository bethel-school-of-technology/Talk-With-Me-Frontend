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
import Error from '../Pages/404.js';





// This is HomePage
export default function HomePage({ loadUser, wholeState, callIn }) {


    const [isSignedIn, setIsSignedIn] = useState(false);
    const [groupInfo, setGroupInfo] = useState({
        name: '',
        description: '',
        likes: 0,
        members: 0
    });
    const [route, setRoute] = useState('home');

   


    const onCreateGroup = (group) => {
        const newGroupInfo = {
            name: group.group.name,
            description: group.group.description,
            likes: 0,
            members: 1
        };
        
        setGroupInfo(newGroupInfo);
        setRoute('display_group');
        
    }
    console.log('after running the function');
    console.log(groupInfo);

    const onRouteChange = (currentRoute) => {
        setRoute(currentRoute);
    }
    console.log(route)
    return (
        <div>
            
            {(() => {
                switch(route){
                    case 'profile':
                        return(
                            <div>
                                <ProfilePage onRouteChange={onRouteChange} wholeState={wholeState.user} />
                            </div>
                            )
                    case 'create_group':
                        return(
                            <div>
                                <CreateGroup onRouteChange={onRouteChange} onCreateGroup={onCreateGroup}/>
                             </div>
                            )
                    case 'display_group':
                        return (
                            <div>
                                <GroupPage groupInfo={groupInfo}/>
                            </div>
                        )
                    case 'home':
                        return (
                            <div className='Home'>
                            <div>
                                <Banner title={"Home"} />
                                <TheForm onRouteChange={onRouteChange} loadUser={loadUser}/>
                                <button onClick={() => onRouteChange('create_group')}>Create Group</button>
                                
                            </div>
                            <div className='flex'>
                                <div>
                                    <GroupBox signInStatus={isSignedIn} />
                                </div>
                            </div>
                            <div>
                                <PostBox />
                            </div>
                        </div>
                        )
                    default: 
                    return (<Error />)

                }
            })()
        }
            {/* { route === 'home'
                ? (
                    <div className='Home'>
                        <div>
                            <Banner title={"Home"} />
                            <TheForm onRouteChange={onRouteChange} loadUser={loadUser}/>

                            
                        </div>
                        <div className='flex'>
                            <div>
                                <GroupBox signInStatus={isSignedIn} />
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


            } {
                route === 'profile' ? (
                    <div>
                        <ProfilePage onRouteChange={onRouteChange} wholeState={wholeState.user} />
                    </div>) 
                    :
                     (
                         console.log('oops')
                     )
            } */}
        </div >

    )
}


