import axios from 'axios';


const updateUser = (user) => {
  return {
    type: "USER_UPDATE",
    user
  }
}

export const getUser = () => {
  return (dispatch) => {
    axios.get('/auth/user')
      .then( (response) => {
        const user = response.data;
        dispatch(updateUser(user));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get user @ '/auth/user'")
        dispatch(updateUser({}));
      });
  };
}

const createUser = (user) => {
  return {
    type: "CREATE_USER",
    user
  }
}

export const createUser = () => {
  return (dispatch) => {
    axios.post('/auth/user')
      .then( (response) => {
        const user = response.data;
        dispatch(createUser(user));
        window.location.href='/'
      })
      .catch((error)=> {
        console.error("AJAX: Could not get user @ '/auth/user'")
        dispatch(createUser({}));
      });
  };
}


export const JOIN_EVENT=(event)=>{
   return{
      type:"FETCH_EVENTS",
      event
   }
}
export const REMOVE_EVENT=(event)=>{
   return{
      type:"FETCH_VENUE",
      event
   }
}

//----------------------------------------------------------

/**
 * Registers a user
 * @param  {string} username The username of the new user
 * @param  {string} password The password of the new user
 */
// export function register(username, password) {
//   return (dispatch) => {
//     // Show the loading indicator, hide the last error
//     dispatch(sendingRequest(true));
//     // If no username or password was specified, throw a field-missing error
//     if (anyElementsEmpty({ username, password })) {
//       dispatch(setErrorMessage(errorMessages.FIELD_MISSING));
//       dispatch(sendingRequest(false));
//       return;
//     }
//     // // Generate salt for password encryption
//     // const salt = genSalt(username);
//     // Encrypt password
//     bcrypt.hash(password, salt, (err, hash) => {
//       // Something wrong while hashing
//       if (err) {
//         dispatch(setErrorMessage(errorMessages.GENERAL_ERROR));
//         return;
//       }
//       // Use auth.js to fake a request
//       auth.register(username, hash, (success, err) => {
//         // When the request is finished, hide the loading indicator
//         dispatch(sendingRequest(false));
//         dispatch(setAuthState(success));
//         if (success) {
//           // If the register worked, forward the user to the homepage and clear the form
//           forwardTo('/dashboard');
//           dispatch(changeForm({
//             username: "",
//             password: ""
//           }));
//         } else {
//           switch (err.type) {
//             case 'username-exists':
//               dispatch(setErrorMessage(errorMessages.USERNAME_TAKEN));
//               return;
//             default:
//               dispatch(setErrorMessage(errorMessages.GENERAL_ERROR));
//               return;
//           }
//         }
//       });
//     });
//   }
// }
// /**
//  * Sets the authentication state of the application
//  * @param {boolean} newState True means a user is logged in, false means no user is logged in
//  */
// export function setAuthState(newState) {
//   return { type: SET_AUTH, newState };
// }
