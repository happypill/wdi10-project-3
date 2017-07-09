import React, {Component, PropTypes} from 'react';
import { Button, ButtonToolbar, Col } from 'react-bootstrap';
import {connect} from 'react-redux';


class EventList extends Component {
  render() {
    return (
      <center>
        <Col md={10} mdOffset={1}>
          <h1>Brace,Event Searcher</h1>
          <p>.</p>
          <ButtonToolbar id="header-buttons">
            <Button bsStyle="primary">CreateEvent</Button>
            <Button bsStyle="primary">JoinEvent</Button>
          </ButtonToolbar>
        </Col>
      </center>
    );
  }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(EventList);