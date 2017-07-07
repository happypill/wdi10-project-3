import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect,IndexRoute,Switch} from 'react-router-dom'

//Import Components
import Events from "../Event/Event";

import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
         <Switch>
             <Route path="/" component={Events}/>
         </Switch>
       </Router>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//
//   };
// }

export default App;
