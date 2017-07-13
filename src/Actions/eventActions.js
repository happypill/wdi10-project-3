
import axios from 'axios';

export const EventConstants = {
  REQUEST_EVENTS: "REQUEST_EVENTS",
  REQUEST_EVENT: "REQUEST_EVENT",
  RECEIVE_EVENTS: "RECEIVE_EVENTS",
  RECEIVE_EVENT: "RECEIVE_EVENT",
  CREATE_EVENT: "CREATE_EVENT",
  UPDATE_EVENT: "UPDATE_EVENT",
  DELETE_EVENT: "DELETE_EVENT",
  CREATE_VENUE_AND_EVENT: "CREATE_VENUE_AND_EVENT",
  CREATE_VENUE_AND_UPDATE_EVENT: "CREATE_VENUE_AND_UPDATE_EVENT",
  RESET_EVENT_FORM: "RESET_EVENT_FORM",
  LOADING_EVENT_ERROR :"LOADING_EVENT_ERROR"
};

export const addEvent = (eventData) => {
  console.log('Event Created', eventData)
  return (dispatch) => {

    let storeinBackEnd = new FormData();
    console.log('Event Created', eventData)


    axios.post('/api/event', storeinBackEnd)
      .then( (response) => {
        console.log(response.data)
        dispatch(createEvent(response.data))
      })
      .catch((error) =>{
        dispatch(loadingEventError(error))
      })
  }
}
export const loadingEventError = (error) => {
  return {
    type: EventConstants.LOADING_EVENT_ERROR,
    error
  }
}

export const resetEventForm = () => ({
  type: EventConstants.RESET_EVENT_FORM
});

export const createEvent = (eventData) => ({
  type: EventConstants.CREATE_EVENT,
  eventData
});

export const updateEvent = (eventId, eventData) => ({
  type: EventConstants.UPDATE_EVENT,
  eventId,
  eventData
});

export const receiveEvents = (events) => ({
  type: EventConstants.RECEIVE_EVENTS,
  events
});

export const receiveEvent = (singleEvent) => ({
  type: EventConstants.RECEIVE_EVENT,
  singleEvent
});

export const requestEvents = () => ({
  type: EventConstants.REQUEST_EVENTS
});

export const requestEvent = (eventId) => ({
  type: EventConstants.REQUEST_EVENT,
  eventId
});

export const deleteEvent = (eventData) => ({
  type: EventConstants.DELETE_EVENT,
  eventData
});


export const createVenueAndEvent = (venueData, eventData) => ({
  type: EventConstants.CREATE_VENUE_AND_EVENT,
  venueData,
  eventData
});

export const createVenueAndUpdateEvent = (venueData, eventId, eventData) => ({
  type: EventConstants.CREATE_VENUE_AND_UPDATE_EVENT,
  venueData,
  eventId,
  eventData
});
