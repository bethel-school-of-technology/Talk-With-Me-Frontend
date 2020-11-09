import React from 'react';


/////outline of profile page////////////
//                                   
////////////////////////////////////////

const ProfilePage = ({ onRouteChange }) => {
    return (
        <div className='flexcontainer background vertical h-400'>
            <button onClick={() => onRouteChange('create_group')} pointer>Create a Group!</button>
        </div>
    );
}

export default ProfilePage;