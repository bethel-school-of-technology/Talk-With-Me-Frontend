import React from 'react';
import SignUpForm from './regform/SignUpForm';
import LoginForm from './regform/LoginForm';



const TheForm = ({ loadUser, onRouteChange }) => {
    return (
        <div>
            <div>
                <LoginForm loadUser={loadUser} onRouteChange={onRouteChange} />
            </div>

            <div>
                <SignUpForm />
            </div>
        </div>
    )
}

export default TheForm;


