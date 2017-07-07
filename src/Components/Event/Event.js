import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import './Event.css';

export class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>Event</div>);
  }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // nothing to see here...
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);