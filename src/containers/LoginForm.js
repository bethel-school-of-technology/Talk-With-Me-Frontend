import React from 'react';
import '../Components/CSS/LoginForm.css';



const LoginForm = () => {
    return (
        <div className='flexcontainer background vertical h-100'>
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