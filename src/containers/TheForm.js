import React from 'react';
import SignUpForm from './regform/SignUpForm';
import LoginForm from './regform/LoginForm';



const TheForm = () => {
    return (
        <div>
            <div>
                <LoginForm />
            </div>

            <div>
                <SignUpForm />
            </div>
        </div>
    )
}

export default TheForm;


