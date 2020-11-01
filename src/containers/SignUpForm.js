import React from 'react';
import '../components/CSS/Form.css';
import '../Pages/ProfilePage';



const SignUpForm = () => {
    return (
        <div className='flexcontainer background vertical h-400'>
            <form action='//#region '>
                <div>
                    <input type='text' className='pa1' placeholder='Email' required/>
                </div>
                <div>
                    <input type='password' className='pa1' placeholder='Password' required/>
                </div>
                <div>
                    <input type='text' className='pa1' placeholder='Write a 20 page essay' required/>
                </div>
                <button onClick={() => {/*<ProfilePage />*/} } type='submit'>Create Account</button>
            </form>
        </div>
    );
}

export default SignUpForm;