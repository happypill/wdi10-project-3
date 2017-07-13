const users = (state = [], action) => {

  console.log(action);

  switch (action.type) {
    case "CREATE_USER":
      break;
    case "READ_USER":
      break;
    case "UPDATE_USER":
      break;
    default:
      return state;
  }
}
