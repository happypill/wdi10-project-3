import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

//Redux
import { Button, Navbar, NavItem, Nav, Grid } from 'react-bootstrap';

//Import from components
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import EventDetails from './Components/EventDetails/EventDetails';
import EventForm from './Components/EventForm/EventForm';

console.log("Component Loaded");
class App extends Component {
  render() {
   return (
      <Router>
        <Switch>
            <Route exact path = '/' component = {Home}></Route>
            <Route path = '/login' component = {Login}></Route>
            <Route path = '/event/{event:id}' component = {EventDetails}></Route>
            <Route path = '/eventform' component = {EventForm}></Route>
        </Switch>
      </Router>
    );
  }
}


console.log("Components are routed");


export default App;
