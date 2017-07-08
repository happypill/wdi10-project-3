import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import Event from '../Event/Event';


import './EventList.css';

/**
 * EventList
 */
export class EventList extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state = {
      cars: [],
      activeEvent: this.props.activeEvent
    }
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

  onClick = (id) => {
    this.props.setActiveCar(id);
  }

  addCars = () => {
    return this.state.cars.map((car) => {
      let isActive = car._id == this.state.activeCar ? "active" : "";
      return ( <CarListView car={car} key={ car._id } onClick={this.onClick} active={isActive} /> )
    });
  }

  render() {
    return (
      <div className="row" id="CarList">
        <div className="col-md-12" id="search">
          <input className="form-control" type="text" placeholder="Search" />
         </div>
         {this.addCars()}
      </div>
    );
  }
}


export default EventList;
