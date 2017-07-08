// import uuid from 'uuid';
//
// export const addEvent = (event) => {
//   return {
//     type: 'ADD_EVENT',
//     id: uuid.v4(),
//     //add more
//   }
// }


import axios from 'axios';



const loadingCars = () => {
  return {
    type: "LOADING_CARS",
    status: "Loading"
  }
}

const addCars = (cars) => {
  return {
    type: "ADD_CARS",
    cars
  }
}

const loadCarsError = (error) => {
  return {
    type: "LOAD_CARS_ERROR",
    error
  }
}


//object with at least a type,
//BUT we are adding an action
//therefore and action can be a function that can be run some time in the future
export const initCars = () => {
//add AJAX call in here
//when asynchronous part of call has been completed, then other functions would be fired
//local state updated (cosmetically updated) first
//[i.e. reducer and internal state updated] and proceed with other actions while backend(database) is being updated
//don't wait for the backend to send response before you proceed with other actions in the local state
//thereforeuser gets instataneous feedback

//pay attention to this!!!
  return (dispatch) => {

    dispatch(loadingCars());
    axios.get('/api/')
      .then( (response) => {
        dispatch(addCars(response.data));
      })
      .catch((error)=> {
        dispatch(loadCarsError(error));
      });
  }
}

store.dispatch(initCars);




export const createCar = (car) => {
  return {
    type: 'CREATE_CAR',
    car
  }
}

export const readCar = (car) => {
  return {
    type: 'READ_CAR',
    car
  }
}

export const updateCars = (car) => {
  return {
    type: 'UPDATE_CAR',
    car
  }
}

export const deleteCar = (car) => {
  return {
    type: 'DELETE_CAR',
    car
  }
}
