import React, { useState } from 'react';
import '../../components/CSS/Form.css';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    }

    onFirstNameChange = (event) => {
        this.setState({ firstname: event.target.value });
    }
    onLastNameChange = (event) => {
        this.setState({ lastname: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        console.log(this.state);
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    console.log(this.state);
                }
            })
    }


    render() {
        return (
                <div className='flexcontainer background vertical h-400'>
                        <div>
                            <input
                                type='text'
                                className='pa1'
                                placeholder='First Name'
                                id='firstname'
                                onChange={this.onFirstNameChange}
                                required
                            />

                            <input
                                type='text'
                                className='pa1'
                                placeholder='Last Name'
                                id='lastname'
                                onChange={this.onLastNameChange}
                                required />

                        </div>
                        <div>
                            <input
                                type='text'
                                className='pa1'
                                placeholder='Email'
                                id='email'
                                onChange={this.onEmailChange}
                                required
                            />
                        </div>
                        <div>
                            <input type='password'
                                className='pa1'
                                placeholder='Password'
                                id='password'
                                onChange={this.onPasswordChange}
                                required
                            />
                        </div>

                        <input
                            onClick={this.onSubmitSignIn}
                            type='submit'
                            value='Create Account'
                        />
            </div>
        )
    };
}

export default SignUpForm;