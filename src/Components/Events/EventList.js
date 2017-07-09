import React, {Component, PropTypes} from 'react';
import { Button, ButtonToolbar, Col } from 'react-bootstrap';
import {connect} from 'react-redux';


class EventList extends Component {
  render() {
    return (

 
          <h1>Brace,Event Searcher</h1>
         


    );
  }
}

const mapStateToProps = (state) => {
    return state;
    
}

export default connect(mapStateToProps)(EventList);