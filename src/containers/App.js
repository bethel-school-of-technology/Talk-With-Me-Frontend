import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import CreateGroupPage from '../Pages/CreateGroupPage';
import HomePage from '../Pages/HomePage';
import Profile from '../Pages/ProfilePage';
import Error from '../Pages/404';

// Containers should be capitalized

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/creategroup" component={CreateGroupPage}></Route>
            <Route component={Error}></Route>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
