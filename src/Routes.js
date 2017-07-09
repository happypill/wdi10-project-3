/*
INCLUDE ALL ROUTING HERE
*/
import React, {PropTypes} from 'react';
import Home from './Components/Home/Home';
import {Switch, Route} from 'react-router-dom';


const Main = () => (

  <Switch>
    <Route path = '/' component = {Home}></Route>
  </Switch>


)

export default Main;
