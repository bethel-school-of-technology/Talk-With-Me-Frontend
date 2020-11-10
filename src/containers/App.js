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

         <CreateGroup />


         <GroupPage />
         <div>
           <Postspage/>
         </div>

        </div>
      </Router>
      

    );
  }
}

export default App;
