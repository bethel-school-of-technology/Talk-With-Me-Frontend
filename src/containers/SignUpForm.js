import React from 'react';
import '../components/CSS/Form.css';



const SignUpForm = () => {
    return (
        <div className='flexcontainer background vertical h-400'>
            <form action='//#region '>
                <div>
                    <input type='text' className='pa1' placeholder='Email' />
                </div>
                <div>
                    <input type='password' className='pa1' placeholder='Password' />
                </div>
                <div>
                    <input type='text' className='pa1' placeholder='Write a 20 page essay' />
                </div>
                <button type='submit'>Create Account</button>
            </form>
        </div>
    );
}

export default SignUpForm;