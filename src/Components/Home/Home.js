import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Col ,Row,Grid} from 'react-bootstrap';

//Import Child Compoonents



import EventMain from '../Events/EventMain'
import SideBar from '../Sidebar/Sidebar'

import './Home.css';


export  class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}><EventMain/></Col> 
          <SideBar/>
      </Row>
      </Grid>
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
