/*
INCLUDE ALL ROUTING HERE
*/
import React, {PropTypes} from 'react';
import EventMain from './Components/Events/EventMain';
import {Switch, Route} from 'react-router-dom';


const Main = () => (

  <Switch>
    <Route path = '/' component = {EventMain}></Route>
  </Switch>


)

export default Main;
