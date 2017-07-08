import { createStore, compose, combineReducers } from 'redux'; 
import thunk from 'redux-thunk';



import EventReducer from '../Reducers/eventReducer'

export let initStore = () => {

  const reducer = combineReducers({
   //add Reducers
    event: EventReducer

  });

  const store = createStore( reducer, 
    compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f      // f = dont do anything
  ) ) 

  return store;
}