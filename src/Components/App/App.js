// import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Redirect,Switch} from 'react-router-dom'
//
//
// import Header from "../Header/Header";
//
//
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//      <Router>
//         <Switch>
//           <Route exact path="/" component={Header}/>
//         </Switch>
//       </Router>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';

import EventList from './Components/EventList/EventList';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import EventDetails from './Components/EventDetails/EventDetails';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeEvent: ""
    }
  }

  //
  // componentDidMount() {
  //   document.addEvventListener("DOMContentLoaded", () => {
  //
  //   })
  // }

  setActiveEvent = (id) => {

    console.log("Active event: ", id);

    this.setState({
      activeEvent: id
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Login/:id" component={Login}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
