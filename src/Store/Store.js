import { createStore, compose, combineReducers } from 'redux'; 


export let initStore = () => {

  const reducer = combineReducers({
   //add Reducer
  });

  const store = createStore( reducer, 
    compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f      // f = dont do anything
  ) ) 

  return store;
}