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
