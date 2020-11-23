import React from 'react';
import '../../components/CSS/Form.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                console.log(user);
                if (user) {
                    console.log('Section #4');
                    this.props.loadUser(user);
                    console.log('user', user);
                    // this.props.onRouteChange('/');
                }
            })
    }

    onLogout = () => {
        fetch('http://localhost:3000/profile/logout', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            })
        })
            .then(response => response.json())
            .then(user => {
                if (!user) {
                    console.log('User logged out');
                    // this.props.onRouteChange('/');
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
                            placeholder='Email'
                            id='email'
                            onChange={this.onEmailChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='password'
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
                        value='LogIn'
                    />
                    <button onClick={this.onLogout} value='logout'>Logout</button>
                    <div>
                        <button onClick={() => this.props.onRouteChange('profile')}>Profile</button>
                    </div>
            </div>
        )
    };
}

export default LoginForm;