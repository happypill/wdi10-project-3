import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import initStore from './Store';
import { Provider } from 'react-redux';
import {HashRouter, Link} from 'react-router-dom';
import { Button, Grid } from 'react-bootstrap';
import Main from './Routes';



class App extends Component {
  render() {
    return (
      <Provider store={initStore()}>
      <div>
        <div >
 

        </div>
        <Grid>
        <Main>
          All routes will be link to here
        </Main>
        </Grid>
      </div>
      </Provider>
    );
  }
}

export default App;


/*

ADD NAVIGATION , LANDING PAGE AND MAIN EVENT PAGE HERE




*/