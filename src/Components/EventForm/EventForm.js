import React, { Component, PropTypes } from 'react';
import { DateRange } from 'react-date-range';
import { Button, FormGroup, InputGroup, ControlLabel, FormControl, Glyphicon, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import Header from '../Header/header'
import { reduxForm } from 'redux-form';
import * as EventActions from '../../Actions/eventActions';


const newEventState = {
  name: "",
  description: "",
  category_id: "",
  num_tickets: 100,
  ticket_price: 0,
  start_time: setDate(),
  end_time: setDate(),
  live: false,
  address: "",
  city: "",
  state: "",
  main_event_image_url: null,
  venue: null,
  venue_id: null,
  venue_name: "",
  venue_displayLocation: "",
  venue_latitude: "",
  venue_longitude: ""
};

function setDate(){
  let date = new Date();
  date.setHours(12);
  date.setMinutes(0);
  return date;
}


export  class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =newEventState;
    
   
  }
   handleSubmit=(event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    let stagedEvent = {
      name: this.state.name,
      description: this.state.description
    };
     this.props.createEvent(stagedEvent);
 
  }
  handleChange = (e) => {
    let key = e.target.name
    let value = e.target.value
    console.log(key, ": ", value)
    let state = this.state
    state[key] = value
    this.setState(state)
  }

  render() {

    return (
       <Row className="show-grid">
       <Header/>
       <br/>
       <br/>
       <br/>
      <Col md={7} mdOffset={1} id="Post">
         <form className="event-form">
            <div className="form-group col-md-5">
             <label htmlFor="InputEmail">Name</label>
             <input type="text" name="name" className="form-control name" id="InputName" placeholder="Name" onChange={this.handleChange} />
           </div>
           <div className="form-group col-md-5">
             <label htmlFor="InputContact">Event Type</label>
             <input type="text" name="description" className="form-control contact" id="InputContact" placeholder="Contact" onChange={this.handleChange} />
           </div>
           <div className="form-group col-md-5">
             <label htmlFor="InputAddress">Venue</label>
             <input type="text" name="address" className="form-control address" id="InputAddress" placeholder="Address"  />
           </div>
           <div className="form-group col-md-5">
             <label htmlFor="InputAddress">StartDate</label>
             <input type="text" name="qualification" className="form-control qualification" id="InputQualification" placeholder="Qualification" />
           </div>
            <div className="form-group col-md-9  ">
               <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Create Event</button>
           </div>
            <FormGroup col-md-9 onClick={this.handleSubmit}>
                 <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>
            </FormGroup>
          </form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  return {

  };
};

const mapDispatchToProps = dispatch => ({
  createEvent: (eventData) => dispatch(EventActions.createEvent(eventData)),
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
