import { createStore, compose, combineReducers} from 'redux'; 
import thunk from 'redux-thunk';


import SearchReducer from './Reducers/searchReducer';


export let initStore = () => {

  const reducer = combineReducers({
     search: SearchReducer
     
  });

  const store = createStore( reducer, 
    compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f      // f = dont do anything
  ) ) 

  return store;
}

export default initStore;