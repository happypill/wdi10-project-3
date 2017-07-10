import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Redux
import initStore from './Store';
import { Provider } from 'react-redux';
import {HashRouter, Link} from 'react-router-dom';


import { Button, Navbar, NavItem, Nav, Grid } from 'react-bootstrap';
import Main from './Routes';
import navBarInstance from './Components/Nav/Nav';


const store = initStore();

store.subscribe(()=>{
    const state = store.getState();
})

class App extends Component {
  render() {
    return (
      <Provider store={initStore()}>
      <div>
        <navBarInstance/>
        <Main />
      </div>
      </Provider>
    );
  }
}

export default App;


/*

ADD NAVIGATION , LANDING PAGE AND MAIN EVENT PAGE HERE




*/
