import React from 'react';
import '../components/CSS/Form.css';



const LoginForm = ({ count }) => {
    return (
        <div className='flexcontainer background vertical h-400'>
            <form action='//#region '>
                <div>
                    <input type='text' className='pa1' placeholder='Username' />
                </div>
                <div>
                    <input type='password' className='pa1' placeholder='Password' />
                </div>
                <button onClick={ () => count (false) } type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;