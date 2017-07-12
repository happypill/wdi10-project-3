//data will be here before any tasks/actions happen. -- will load first
const userReducer = (state = {}, action) => {
// action here is a function
  console.log(action);

  switch (action.type) {
    // no user at beginning
    // return user , if not, return empty object
    case "USER_UPDATE":
        return action.user || {};
// default state is being returned even if axios is not working
    case "CREATE_USER":
        return !user ? error="User already exists" || action.user; 

        }
      break;

// return  default state while axios is running
// default is crucial to prevent page from crashing
    default:
        return state;
  }
}


export default userReducer;

// use spread operator as long as it is not the initial state that we are calling
// not used here as there is nothing in the state



//create 2 arrrays - 1 real array and the other filtered arrrays
//when search is complete, show filtered array, otherwise show filtered array
