import React, { Component } from 'react';
import connect from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Login from '../Login/Login';
import Home from '../Home/Home'


import './App.css';

class App extends Component {
  render() {
    return (
     <Router>
        <Switch>
          <Route exact path="/" components={Login}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </Router>
    );
  }
}


// <Route exact path="/home" component={Home}/>
// <Route exact path="/room/:id" component={Room}/>
// <Route exact path="/profile" component={Profile}/>
// <Route exact path="/logout" component={Logout}/>


export default App;
