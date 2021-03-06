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
import axios from 'axios';
import SearchBar from '../Search/Search'
import EventList from './EventList'
//import EventDetails from '../EventDetails/EventDetails'
import Sidebar from '../Sidebar/Sidebar'

import './Events.css';

class EventMain extends Component {

    constructor(props) {
    super(props);

    this.state = {
      events: [
        {name: 'jack', id: '2a', start: 'a', }, {name: 'jill', id: '2b'}, {name: 'hill', id: '2c'}]
    }
  }


  //  componentDidMount() {
  //   axios.get('/all')
  //   .then((response) => {
  //     let arr = response.data;
  //     console.log('arr', arr);
  //     this.setState({
  //       library: arr
  //     });
  //     console.log("response data", arr);
  //     console.log('library it worked', response.status); // ex: 200
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     console.log('error getting library', error.status);
  //   });

  // }

  renderEventsView() {
    const event = this.props.activeEvent;

    if (event !== null) {
      // return <EventDetail />
      return <EventList events={this.state.events}/>
    }
    return <EventList events={this.state.events}/>
  }

  render() {
    return (
        <div id="eventsList">
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
