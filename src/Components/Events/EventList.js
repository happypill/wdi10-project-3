import React, {Component, PropTypes} from 'react';
import { Button, ButtonToolbar, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import EventView from './EventView'



class EventList extends Component {
   constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    this.renderEvents = this.renderEvents.bind(this);
    this.renderLogo = this.renderLogo.bind(this);
  }
  renderLogo(logo) {
    if (logo !== null) {
      return logo.original.url
    } else {
      // placeholder image
      return 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif'
    }
  }
  renderEvents = (event, index) => {
   console.log('render event')
   return (
     <EventView event={event} index={index}/>
   )
 }

  render() {
    console.log(this.state.events)
    const events = this.props.events.map(this.renderEvents);
    return (


   <section id="event-list">
        <div className="container2">
          {this.props.events.map(this.renderEvents)}
        </div>
      </section>

    );
  }
}

const mapStateToProps = (state) => {

    return { events: state.events };

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EventList);
