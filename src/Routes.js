/*
INCLUDE ALL ROUTING HERE
*/
import React, {PropTypes} from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {Switch, Route} from 'react-router-dom';


const Main = () => (

  <Switch>
    <Route path = '/' component = {Home}></Route>
    <Route path = '/login' component = {Login}></Route>
  </Switch>


)

export default Main;
