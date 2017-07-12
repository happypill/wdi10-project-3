import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import User from '../User/User';

// import { toggleTodo } from '../../Actions/Todo';

import './EventDetails.css';

/**
 * TodoListView
 */
//export class TodoListView extends Component { // eslint-disable-line react/prefer-stateless-function


export class EventDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeEvent: {}
    };

    this.renderLogo = this.renderLogo.bind(this);
  }

  renderLogo(logo) {
    if (logo !== null) {
      return logo.original.url
    } else {
      // placeholder image
      return ''
    }
  }

  render() {
    const event = this.props.activeEvent;

    if (!event ) {
      return <h1>Event Detail</h1>;
    }
    return (
      <div id="detail-view">
        <img src={this.renderLogo(event.logo)}/>
        <div className="event-summary">
          <h3>{event.name.text}</h3>
          <p>{event.start.local}</p>
          <p>Venue id: {event.venue_id}</p>
        </div>
        <p>{event.description.text}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeEvent: state.activeEvent,
  };
}

export default connect(mapStateToProps)(EventDetails);
