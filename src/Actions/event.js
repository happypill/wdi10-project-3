import uuid from 'uuid';

export const addEvent = (event) => {
  return {
    type: 'ADD_EVENT',
    id: uuid.v4(),
    //add more
  };
};

export const search=(event)=>{
  return{
    type:'SEARCH_EVENT',
    event
  };
};

export const showALl=(event)=>{
   return{
      type:"SHOW EVENT",
      event
   }
}
