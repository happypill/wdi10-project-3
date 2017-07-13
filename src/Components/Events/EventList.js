import React, {Component, PropTypes} from 'react';
import { Button, ButtonToolbar, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import EventView from './EventView'


class EventList extends Component {
   constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    // this.renderEvents = this.renderEvents.bind(this);
    // this.renderLogo = this.renderLogo.bind(this);
  }
  componentDidMount() {

    console.log("EventList.componentDidMount");

    axios.get('/api/')
      .then( (response) => {
        console.log(response);
        this.setState({
          events: response.data
        });
      })
      .catch((error)=> {
        console.log(error);
      });
  }


  renderEvents = (event, index) => {
    console.log('render event')
    return (
      <EventView event={event} index={index}/>
    )
  }


  render() {
    console.log(this.state.events)
        const events = this.state.events.map(this.renderEvents);
    return (


   <section id="event-list">
        <div className="container2">
          <ul>{events}</ul>
        </div>
      </section>

    );
  }
}

const mapStateToProps = (state) => {

    return { events: state.events };

}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps,mapDispatchToProps)(EventList);

// export default EventList
