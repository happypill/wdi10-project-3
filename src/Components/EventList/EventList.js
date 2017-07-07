import React, { Component, PropTypes } from 'react';

/**
 * ComponentName
 */
export class EventList extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>MY COMPONENT</div>
      
    );
  }
}

EventList.propTypes = {
  prop: PropTypes.type.isRequired
}

export default EventList;
