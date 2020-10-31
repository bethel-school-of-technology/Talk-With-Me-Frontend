import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from '../Pages/HomePage';
import Banner from '../components/Banner';

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
          <Route path="/banner">
            <Banner />
          </Route>
        </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
