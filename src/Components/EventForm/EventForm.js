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
    this.state =newEventState;
    
   
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
      end_time : this.state.end_time
    };
     this.props.createEvent(stagedEvent);
 
  }
  handleChange = (key) => {
    return (event) => this.setState({
                   [key]: event.target.value
            });
    // let key = e.target.name
    // let value = e.target.value
    // console.log(key, ": ", value)
    // let state = this.state
    // state[key] = value
    // this.setState(state)
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
             <label htmlFor="InputEmail">Event Name</label>
             <input type="text" name="name" className="form-control name" id="InputName" placeholder="Name of your Event" value ={this.state.name} onChange={this.handleChange("name")} />
           </div>
           <div className="form-group col-md-5">
             <label htmlFor="InputContact">Event Description</label>
             <input type="text" name="description" className="form-control description" id="InputDescription" placeholder="Fill in Event Description" onChange={this.handleChange("description")} />
           </div>
           <div className="form-group col-md-5">
             <label htmlFor="InputAddress">Venue</label>
             <input type="text" name="venue" className="form-control address" id="InputVenue" placeholder="Venue" onChange={this.handleChange("venue")}/>
           </div>
           <div className="form-group col-md-5">
             <label htmlFor="InputAddress">Start Date/Time </label>
             <input type="text" name="starttime" className="form-control starttime" id="InputStartTime" placeholder="StartTime" onChange={this.handleChange("starttime")} />
           </div>
            <div className="form-group col-md-5">
             <label htmlFor="InputAddress">End Date/Time </label>
             <input type="text" name="endtime" className="form-control endtime" id="InputEndTime" placeholder="EndTime"  onChange={this.handleChange("endtime")}/>
           </div>
            <div className="form-group col-md-9  ">
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
