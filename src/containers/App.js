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
  constructor(props) {
    super(props);
    this.state = {
      user: {
        isSignedIn: false,
        email: '',
        password: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({
      user: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
          <Route exact path="/">
      
            <HomePage />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>



        </Switch>
        </div>
      </Router>
      

    );
  }
}

export default App;
