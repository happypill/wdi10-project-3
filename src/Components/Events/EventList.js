import React, {Component, PropTypes} from 'react';
import { Button, ButtonToolbar, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import Nav from './Nav/Nav.js';
import EventList from './EventList/EventList.js';


class EventList extends Component {
  render() {
    return (


          <h1>Brace,Event Searcher</h1>
          <Nav/>
          <EventList />


    );
  }
}

const mapStateToProps = (state) => {
    return state;

}

export default connect(mapStateToProps)(EventList);
