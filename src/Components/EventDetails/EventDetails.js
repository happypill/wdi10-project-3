import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import Attendees from './Components/Attendees/Attendees';

// import { toggleTodo } from '../../Actions/Todo';

import './EventDetails.css';

/**
 * TodoListView
 */
//export class TodoListView extends Component { // eslint-disable-line react/prefer-stateless-function


export class EventDetails extends Components {
  constructor(props) {
    super(props);

    this.state = {
      completed: this.props.todo.completed
    }
  }

  onClick = (e) => {

      const toggle = this.state.completed ? false : true;
      console.log('clicked: ', toggle);

      this.props.toggleTodo(this.props.todo.id);

      this.setState( {
        completed: toggle
      });
  }


  render() {

    const done = this.props.todo.completed ? "done" : "notDone";

    return (
      <div className="todo"
           onClick={this.onClick}>
           key={this.props.todo.id}
            <div className={done}>
            </div>
            <div className="data">
              <div className="label">{this.props.todo.text}</div>
              <div className="date">2017-07-01 12:12</div>
            </div>
            <div style={{ clear: 'both'}}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => { dispatch(toggleTodo(id)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);


export default EventDetails;
