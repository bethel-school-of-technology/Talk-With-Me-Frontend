import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from '../Pages/HomePage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage /> {/*  Homepage was moved to /Pages/HomePage.js  */}
      </div>
    );
  }
}

export default App;
