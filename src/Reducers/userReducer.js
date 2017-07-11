//data will be here before any tasks/actions happen. -- will load first

const userReducer = (state = {}, action) => {

  console.log(action);

  switch (action.type) {
    case "USER_UPDATE":
      return action.user || {};
      break;
    // case "CREATE_USER":
    //   break;
    default:
      return state;
  }
}

export default userReducer
