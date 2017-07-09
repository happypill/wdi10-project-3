/*
EventMain - Add your event list , event details here
Any Events type , you add it here. This is just a container
*/
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import EventList from './EventList'


const EventMain = (props) => (
<div>
  <EventList events={props.events || []}/>
</div>
);

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(EventMain);
