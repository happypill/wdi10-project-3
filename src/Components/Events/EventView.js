import React, {Component,PropTypes} from 'react';

import { getEvent } from '../EventDetails/EventDetails';

import './Events.css';


export class EventView extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   completed: this.props.todo.completed
    // }

  }


  render() {
    return (
      <div className="eventview">
        <a className="eventviewtitle" href={'/event/'+this.props.event.id}>{this.props.event.name}</a>
        <p>{this.props.event.start} to {this.props.event.end}</p>
        <p>{this.props.event.venue}</p>
      </div>);
  }

}

export default EventView;
