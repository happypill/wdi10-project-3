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
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }
}




export default App;
