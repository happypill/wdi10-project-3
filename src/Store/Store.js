import { createStore, compose, combineReducers } from 'redux'; 
import thunk from 'redux-thunk';


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