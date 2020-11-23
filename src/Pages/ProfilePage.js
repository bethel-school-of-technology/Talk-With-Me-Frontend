import React from 'react';

const ProfilePage = ({ onRouteChange, wholeState }) => {
    return(
        <div className='flexcontainer background vertical h-400'>
            <h1>Hello {wholeState.firstname} {wholeState.lastname}!</h1>
            <h2>You've created the account with your {wholeState.email} with the hashed password:</h2>
            <h5>{wholeState.password}</h5>
            <button onClick={() => onRouteChange('home')}>Back</button>
        </div>
    );
}

export default ProfilePage;