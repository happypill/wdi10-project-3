import axios from 'axios';
//ACTION CREATOR
const loadEvents = (events) => {
  return {
    type: "LOAD_EVENTS",
    events
  }
}
const events = (state = {}, action) => {

  console.log(action);

  switch (action.type) {
    case "CREATE_EVENT":
      let data = action.eventData;
      return {
        ...state,
        data
      }
      break;    
    case "READ_EVENT":
        return{

        }
      break;
    case "JOIN_EVENT":
      break;
    case "UPDATE_EVENT":
      break;
    case "DELETE_EVENT":
      break;
    case "INIT_EVENT":
      break;
    default:
      return state;
  }
}


export default events