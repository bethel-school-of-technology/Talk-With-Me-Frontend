import React, { useState } from 'react';
import '../../components/CSS/Form.css';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        return (
            <div>
                <form className='flexcontainer background vertical h-400'>
                    <div>
                        <div>
                            <input type='text' className='pa1' placeholder='Email' id='email' required />
                        </div>
                        <div>
                            <input type='password' className='pa1' placeholder='Password' id='password' required />
                        </div>
                        <div>
                            <input type='text' className='pa1' placeholder='Write a 20 page essay' id='essay' required />
                        </div>
                        <button onClick={ () => this.props.count(true)} type='submit'>Create Account</button>
                    </div>
                </form>
            </div >
        )
    };
}

export default SignUpForm;