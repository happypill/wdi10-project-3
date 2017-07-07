
import axios from 'axios';

// export const EventConstants = {
//   REQUEST_EVENTS: "REQUEST_EVENTS",
//   REQUEST_EVENT: "REQUEST_EVENT",
//   RECEIVE_EVENTS: "RECEIVE_EVENTS",
//   RECEIVE_EVENT: "RECEIVE_EVENT",
//   CREATE_EVENT: "CREATE_EVENT",
//   UPDATE_EVENT: "UPDATE_EVENT",
//   DELETE_EVENT: "DELETE_EVENT",
//   TOGGLE_BOOKMARK: "TOGGLE_BOOKMARK",
//   RECEIVE_BOOKMARK_EVENT: "RECEIVE_BOOKMARK_EVENT",
//   CREATE_VENUE_AND_EVENT: "CREATE_VENUE_AND_EVENT",
//   CREATE_VENUE_AND_UPDATE_EVENT: "CREATE_VENUE_AND_UPDATE_EVENT",
//   RESET_EVENT_FORM: "RESET_EVENT_FORM"
// };
//
//


export const FETCH_EVENTS=(event)=>{
   return{
      type:"FETCH_EVENTS",
      event
   }
}
export const FETCH_VENUE=(event)=>{
   return{
      type:"FETCH_VENUE",
      event
   }
}
export const EVENT_SELCTED=(event)=>{
   return{
      type:"EVENT_SELECTED",
      event
   }
}

const API_URL = 'https://www.eventbriteapi.com/v3';
//ADD TOKEN
const TOKEN= '';

export function fetchEvents(searchTerm)=> {
  const url = `${API_URL}/events/search/?token=${TOKEN}`

  const request = axios.get(url, {
    params: {
      q: searchTerm
    }
  });

  return {
    type: FETCH_EVENTS,
    payload: request
  };
}

export function fetchVenue(venue_id) {
  const url = `${API_URL}/venues/${venue_id}`

  const request = axios.get(url);

  console.log(request.data);

  return {
    type: FETCH_VENUE,
    payload: request
  };
}

export function selectEvent(event) {
  return {
    type: EVENT_SELECTED,
    payload: event,
  };
}
