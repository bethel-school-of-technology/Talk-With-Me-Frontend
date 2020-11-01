import React, { Component } from 'react';
import Banner from '../components/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from '../Pages/HomePage';

// Containers should be capitalized

class App extends Component {
  render() {
    return (
      <Router>
        {/* <div className="App"> */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/banner">
            <Banner />
          </Route>
        </Switch>

        {/* </div> */}
      </Router>

    );
  }
}

export default App;
