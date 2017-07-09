import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Col ,Row,Grid} from 'react-bootstrap';

//Import Child Compoonents



import EventMain from '../Events/EventMain'
import SideBar from '../Sidebar/Sidebar'
import SearchBar from '../Search/Search'

import './Home.css';


export  class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>

        <Col className="show-grid">
          <Col xs={9} md={8}><EventMain/>    
            <Row className="show-grid">
             <SearchBar/>
            </Row>
          </Col> 
         <Col xs={3} md={4} xsOffset={12}><SideBar/></Col> 
      </Col>

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
