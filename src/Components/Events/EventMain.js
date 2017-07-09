/*
EventMain - Add your event list , event details here
Any Events type , you add it here. This is just a container
*/
/*
    Returns component wrapped in parent component. Enables testing
    componentWillReceiveProps in child component via parent.setState().
    Inspired by http://jaketrent.com/post/test-react-componentwillreceiveprops/
*/




import React, { Component } from 'react';
import  { connect } from 'react-redux';

import SearchBar from '../Search/Search'
import EventList from './EventList'
import EventDetail from './EventDetail'
import Sidebar from '../Sidebar/Sidebar'

class EventMain extends Component {

  renderEventsView() {
    const event = this.props.activeEvent;

    if (event !== null) {
      return <EventDetail />
    }
    return <EventList />
  }

  render() {
    return (
        <div id="eventsView">
          {this.renderEventsView()}
          </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    activeEvent: state.activeEvent,
  };
}

export default connect(mapStateToProps)(EventMain);
