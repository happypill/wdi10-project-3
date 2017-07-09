


export const setEvent = (event) => {
  console.log(event);
  if(Array.isArray(event)){
    localStorage.setItem('Event', JSON.stringify(event));
  }
}

export const getEvent = () => {
  const eventJSON = localStorage.getItem('Event');
  let Event = [];
  try {
    Event = JSON.parse(eventJSON);
  }catch(e){
    console.log("Error: Local Storage cannot get Event");
  }
  return Array.isArray(Event) ? Event : [];
}