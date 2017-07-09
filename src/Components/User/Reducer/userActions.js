import axios from 'axios';



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


