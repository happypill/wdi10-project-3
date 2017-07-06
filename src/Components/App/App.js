import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect,Switch} from 'react-router-dom'


import Header from "../Header/Header";


import './App.css';

class App extends Component {
  render() {
    return (
     <Router>
        <Switch>
          <Route exact path="/" component={Header}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
