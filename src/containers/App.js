import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import CreateGroup from '../components/Group/CreateGroup';
import HomePage from '../Pages/HomePage';
import Profile from '../Pages/ProfilePage';
import GroupPage from './GroupPage'
import Error from '../Pages/404';
import Postspage from '../components/Posts/PostsPage'


// Containers should be capitalized

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      user: {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
      }
    }
  }

  onloadUser = (data) => {
    this.setState({
      user: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password
      }
    })
  }

  callInState = () => {
    console.log(this.state);
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path="/">

              <HomePage loadUser={this.onloadUser} wholeState={this.state} callIn={this.callInState} />
            </Route>
          </Switch>
        </div>
      </Router>


    );
  }
}

export default App;
