import React, {Component, PropTypes} from 'react';
import { Button, ButtonToolbar, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { selectEvent } from './Action/eventActions';

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
  return bindActionCreators({ selectEvent: selectEvent }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EventList);