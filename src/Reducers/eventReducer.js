

//data will be here before any tasks/actions happen. -- will load first

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
//entire list of events in database. going to be asynchronous
    case "INIT_EVENT":
      break;
    default:
      return state;
  }
}


export default events