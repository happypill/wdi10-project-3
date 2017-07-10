/*
INCLUDE ALL ROUTING HERE
*/
import React, {PropTypes} from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import EventDetails from './Components/EventDetails/EventDetails';
import {Switch, Route} from 'react-router-dom';


const Main = () => (

  <Switch>
    <Route exact path = '/' component = {Home}></Route>
    <Route path = '/login' component = {Login}></Route>
    <Route path = '/event/{event:id}' component = {EventDetails}></Route>
  </Switch>

)

export default Main;
