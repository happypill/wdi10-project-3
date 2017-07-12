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
  start_time: setDate(),
  end_time: setDate(),
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
    this.state=newEventState;
    
   
  }
   handleSubmit=(event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    let stagedEvent = {
      name: this.state.name,
      description: this.state.description,
      venue:this.state.venue,
      start_time :this.state.start_time,
      end_time : this.state.end_time,
      details: this.state.details
    };
     this.props.createEvent(stagedEvent);
 
  }
  handleChange = (e) => {
    let key = e.target.name
    let value = e.target.value
    console.log(key, ": ", value)
    this.setState({
        [key]: value
    });

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
         <h2>Create Event</h2>
            <div className="form-group col-md-4">
             <label htmlFor="Inputname">Event Name</label>
             <input type="text" className="form-control name" name="name" placeholder="Name of your Event"  onChange={this.handleChange} />
           </div>
           <div className="form-group col-md-4">
             <label htmlFor="InputDescription">Event Description</label>
             <input type="text"  className="form-control description" name="description" placeholder="Fill in Event Description" onChange={this.handleChange} />
           </div>
           <div className="form-group col-md-4">
             <label htmlFor="InputVenue">Venue</label>
             <input type="text" className="form-control address" name="venue" placeholder="Venue" onChange={this.handleChange}/>
           </div>
           <div className="form-group col-md-4">
             <label htmlFor="InputDetails">Details</label>
             <input type="text" className="form-control" name="details" placeholder="Details" onChange={this.handleChange} />
           </div>
           <div className="form-group col-md-4">
             <label htmlFor="StartDate">Start Date/Time </label>
             <input type="text"  className="form-control starttime" name="starttime" placeholder="StartTime" onChange={this.handleChange} />
           </div>
            <div className="form-group col-md-4">
             <label htmlFor="EndDate">End Date/Time </label>
             <input type="text"  className="form-control endtime" placeholder="endtime"  onChange={this.handleChange}/>
           </div>
            <div className="form-group col-md-9">
               <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Create Event</button>
           </div>
           

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