import React, { Component, PropTypes } from 'react';
import { DateRange } from 'react-date-range';
import { Button, ButtonToolbar, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import Header from '../Header/header'


export  class EventForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
       <form action="/registertalent" method="post">
        <div className="col-md-offset-12 header">
        <Header/>
          <br/>
          <br/>
          <br/>
        </div>
        <h2>Create Event</h2>
         <div className="form-group col-md-5">
           <label htmlFor="InputEmail">Name</label>
           <input type="text" name="name" className="form-control name" id="InputName" placeholder="Name" />
         </div>
         <div className="form-group col-md-5">
           <label htmlFor="InputContact">Event Type</label>
           <input type="text" name="text" className="form-control contact" id="InputContact" placeholder="Contact" />
         </div>
         <div className="form-group col-md-5">
           <label htmlFor="InputAddress">Venue</label>
           <input type="text" name="address" className="form-control address" id="InputAddress" placeholder="Address" />
         </div>
         <div className="form-group col-md-5">
           <label htmlFor="InputAddress">StartDate</label>
           <input type="text" name="qualification" className="form-control qualification" id="InputQualification" placeholder="Qualification" />
         </div>

       
         <div className="form-group col-md-9">
         <button type="submit" className="btn btn-primary">Create Event</button>
         </div>
      </form>
    )
  }
}

export default connect()(EventForm);