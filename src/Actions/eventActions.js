import axios from 'axios';
import uuid from 'uuid';

const loadingEvents = () => {
  return{
    type: "LOADING_EVENTS"
  }
}

const storeEvent = (event) => {
  return{
    type: "STORE_EVENT",
    event
  }
}

const loadingEventsError = (error) => {
  return{
    type: "LOAD_EVENTS_ERROR",
    error
  }
}

export const getRestaurant = () => {
  return (dispatch) => {                //thunk allows functions inside actions
    // dispatch(loadingRestaurant());
    axios.get('/api')
    .then( (response)=>{
      dispatch(storeRestaurant(response.data));
    }).catch( (error) =>{
      dispatch(loadingRestaurantError(error));
    })
  }
}

const addRestaurantInStore = (newRestaurant) => {
  return {
    type: 'ADD_RESTAURENT',
    newRestaurant
  }
}
const addRestaurant_id = (newRestaurantPicHome, newRestaurantId,newRestaurant_id) => {
  return {
    type: 'ADD_RESTAURENT_ID',
    newRestaurantPicHome,
    newRestaurantId,
    newRestaurant_id
  }
}

const updateRestaurantInStore = (restaurant) => {
  return {
    type: 'UPDATE_RESTAURENT',
    restaurant
  }
}

export const addRestaurant = (picHome, picIndividual, newRestaurant) => {
  return (dispatch) => {
    newRestaurant.id = uuid.v4();
    dispatch(addRestaurantInStore(newRestaurant));

    let picHomeToBackEnd = new FormData();
    picHomeToBackEnd.append('picHome', picHome);
    picHomeToBackEnd.append('name', newRestaurant.name);
    picHomeToBackEnd.append('star', newRestaurant.star);
    picHomeToBackEnd.append('describeHome', newRestaurant.describeHome);
    picHomeToBackEnd.append('describeIndividual', newRestaurant.describeIndividual);
    picHomeToBackEnd.append('id', newRestaurant.id);

    //sending newRestaurant to backend
    axios.post('/api/files',picHomeToBackEnd)
    .then( (response)=>{
      //restaurant_id = response.data._id
      //update newRestaurant in store to get the ._id of database
      dispatch(addRestaurant_id(response.data.picHome,response.data.id,response.data._id));
    }).catch( (error) =>{
      console.log(error);
      dispatch(loadingRestaurantError(error));
    })
  }
}




export const updateRestaurant = (restaurant) => {
  return (dispatch) => {                //thunk allows functions inside actions
    // dispatch function to send info to store first
    dispatch(updateRestaurantInStore(restaurant));
    // axios function to send info to backend database
    axios.put('/api/'+restaurant._id,restaurant)
    .then( (response)=>{
      console.log(response.data);
    }).catch( (error) =>{
      dispatch(loadingRestaurantError(error));
    })
  }
}

const deleteRestaurantInStore = (_id) => {
  return {
    type: 'DELETE_RESTAURENT',
    _id
  }
}

export const deleteRestaurant = (_id) => {
  return (dispatch) => {                //thunk allows functions inside actions
    dispatch(deleteRestaurantInStore(_id));
    axios.delete('/api/'+_id)
    .then( (response)=>{
      console.log(response.data);
    }).catch( (error) =>{
      dispatch(loadingRestaurantError(error));
    })
  }
}
