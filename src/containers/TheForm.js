import React from 'react';
import SignUpForm from './regform/SignUpForm';
import LoginForm from './regform/LoginForm';



const TheForm = ({ loadUser }) => {
    return (
        <div>
            <div>
                <LoginForm loadUser={loadUser}/>
            </div>

            <div>
                <SignUpForm />
            </div>
        </div>
    )
}

export default TheForm;


