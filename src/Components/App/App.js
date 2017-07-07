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

import CarList from './Components/CarList/CarList';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeCar: ""
    }
  }


  setActiveCar = (id) => {

    console.log("Active car: ", id);

    this.setState({
      activeCar: id
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