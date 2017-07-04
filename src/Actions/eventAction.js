import uuid from 'uuid';

export const addEvent = (event) => {
  return {
    type: 'ADD_EVENT',
    id: uuid.v4(),
    //add more
  }
}