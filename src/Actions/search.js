import axios from 'axios';

const API_URL = 'https://www.eventbriteapi.com/v3';
//ADD TOKEN
const TOKEN= '';

// export function fetchEvents(searchTerm)=> {
//   const url = `${API_URL}/events/search/?token=${TOKEN}`

//   const request = axios.get(url, {
//     params: {
//       q: searchTerm
//     }
//   });

//   return {
//     type: FETCH_EVENTS,
//     payload: request
//   };
// }

// export function fetchVenue(venue_id) {
//   const url = `${API_URL}/venues/${venue_id}`

//   const request = axios.get(url);

//   console.log(request.data);

//   return {
//     type: FETCH_VENUE,
//     payload: request
//   };
// }

export function selectEvent(event) {
  return {
    type: EVENT_SELECTED,
    payload: event
  };
}


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