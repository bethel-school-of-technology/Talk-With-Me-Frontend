import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import HomePage from '../Pages/HomePage';


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
