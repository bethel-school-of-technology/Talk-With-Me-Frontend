import React from 'react';
import './LoginForm.css';



const LoginForm = () => {
    return (
        <div className='flexcontainer background vertical'>
            <form action='//#region '>
                <div>
                    <input type='text' className='pa1' placeholder='Username' />
                </div>
                <div>
                    <input type='password' className='pa1' placeholder='Password' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;