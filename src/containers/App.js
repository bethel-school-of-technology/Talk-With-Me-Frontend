import React, { Component } from 'react';
import './App.css';
import GroupBox from './GroupBox';
import Banner from '../components/Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <div></div>
        <GroupBox />        
      </div>
    );
  }
}

export default App;
