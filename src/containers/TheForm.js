import React from 'react';
import SignUpForm from './regform/SignUpForm';
import LoginForm from './regform/LoginForm';



const TheForm = ({ count, count1 }) => {
    return (
        count1 === 1 ? (
            <div>
                <LoginForm count={count} />
            </div>
        ) : (
                <div>
                    <SignUpForm count={count} />
                </div>
            )
    )
}

export default TheForm;


