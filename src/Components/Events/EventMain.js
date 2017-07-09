/*
EventMain - Add your event list , event details here
Any Events type , you add it here. This is just a container
*/
/*
    Returns component wrapped in parent component. Enables testing
    componentWillReceiveProps in child component via parent.setState().
    Inspired by http://jaketrent.com/post/test-react-componentwillreceiveprops/
*/


import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import EventList from './EventList'
import Sidebar from '../Sidebar/Sidebar'

const EventMain = (props) => (
<div>
  <EventList events={props.events || []}/>
</div>
);

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(EventMain);
