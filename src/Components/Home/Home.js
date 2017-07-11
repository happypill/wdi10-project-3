import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Col ,Row,Grid} from 'react-bootstrap';

//Import Child Compoonents


import EventMain from '../Events/EventMain'
import SideBar from '../Sidebar/Sidebar'
import SearchBar from '../Search/Search'
import Header from '../Header/header'

import './Home.css';


export  class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Header />
          <br/>
          <br/>
          <br/>
          <SearchBar/>
            <Grid>
              <Row>
                <h1>WELCOME</h1>
                <hr/>
                <p>THIS IS A EVENT PAGE </p>
              </Row>
              <Row>
              <EventMain />
              </Row>
            </Grid>

        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // add more
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
