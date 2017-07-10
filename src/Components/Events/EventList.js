import React, {Component, PropTypes} from 'react';
import { Button, ButtonToolbar, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
<<<<<<< HEAD
import { selectEvent } from './Action/eventActions';
=======
import Nav from './Nav/Nav.js';
import EventList from './EventList/EventList.js';

>>>>>>> 38d73819a7fd6d38af3c9cc8850fefe3c4475bcf

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


  render() {
    return (

<<<<<<< HEAD
   <section id="event-list">
        <div className="container2">
          {this.props.events.map(this.renderEvents)}
        </div>
      </section>
=======

          <h1>Brace,Event Searcher</h1>
          <Nav/>
          <EventList />
>>>>>>> 38d73819a7fd6d38af3c9cc8850fefe3c4475bcf


    );
  }
}

const mapStateToProps = (state) => {
<<<<<<< HEAD
    return { events: state.events };
    
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectEvent: selectEvent }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EventList);
=======
    return state;

}

export default connect(mapStateToProps)(EventList);
>>>>>>> 38d73819a7fd6d38af3c9cc8850fefe3c4475bcf
