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
                console.log('tehee')
                if (user) {
                    console.log('Section #4');
                    this.props.loadUser(user);
                    console.log('user', user);
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
            </div>
        )
    };
}

export default LoginForm;