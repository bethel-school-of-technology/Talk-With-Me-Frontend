import React from 'react';
import '../components/CSS/Profile.css';


const ProfilePage = ({ onRouteChange, wholeState }) => {
    return(
        <div className='flexcontainer background vertical h-400'>
            <h1 className='white'>Hello {wholeState.firstname} {wholeState.lastname}!</h1>
            <h2 className='white'>You've created the account with your {wholeState.email} with the hashed password:</h2>
            <h5 className='white'>{wholeState.password}</h5>
            <button onClick={() => onRouteChange('home')}>Back</button>
        </div>
    );
}

export default ProfilePage;