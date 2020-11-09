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
<<<<<<< HEAD
          <Switch>
          <Route exact path="/">
=======

          <Switch>
         <Route exact path="/">
>>>>>>> 82ae2722b4fa79b92831d4352f8d0c28ceeb6efc
            <HomePage />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
<<<<<<< HEAD
        </Switch>

         <CreateGroup />
=======


        </Switch>

         <CreateGroup />

>>>>>>> 82ae2722b4fa79b92831d4352f8d0c28ceeb6efc

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
