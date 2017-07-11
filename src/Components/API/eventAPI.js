


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

export const searchAPI = (ingredient,cb){
  const headers = new Headers({

          "X-Mashape-Key":"myag4vesVomshRjyCEbIzvRB9AvXp1KEaP9jsnXpyENrKtvP2u",
          "Content-Type": "application/json",
          "Accept": "application/json"});
          const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${ingredient}&limitLicense=false&number=5&ranking=1`
          fetch(url, {headers})
              .then(function(response){
                return response.text();
              })
              .then(function(json){
                cb(json);

              });
}