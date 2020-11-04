import React, { Component } from 'react';
import Banner from '../components/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import CreateGroup from '../components/Group/CreateGroup'
import HomePage from '../Pages/HomePage';
import Profile from '../Pages/ProfilePage';


// Containers should be capitalized

class App extends Component {
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
            <Route path="/creategroup">
              <CreateGroup />
            </Route>
            <Route component={Error}></Route>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
