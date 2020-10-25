import React, { Component } from 'react';
import './App.css';
import GroupBox from './GroupBox';
import Banner from '../components/Banner';
import LoginForm from '../components/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Banner />
        </div>
        
        <div className='flex'>
          <div>
            <GroupBox />
          </div>
          <div>
            <LoginForm />
          </div>
        </div>     
      </div>
    );
  }
}

export default App;
