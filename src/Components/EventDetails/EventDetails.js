import React, { Component } from 'react';
import  { connect } from 'react-redux';
//import { joinEvent } from '../User/Action/userActions';

class EventDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeEvent: this.props.event._id
    };

    this.renderLogo = this.renderLogo.bind(this);
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
          <h2>{event.name.text}</h2>
          <h4>When: {event.start.local} - {event.end.local}</h4><br />
          <h4>Where: {event.venue.text}</h4>
        </div>
        <p>{event.description.text}</p>
        <br/>
        <button type="submit"
                className="btn btn-success join">Join This Event</button>
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
