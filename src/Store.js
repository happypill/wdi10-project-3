import { createStore, compose, combineReducers, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';


import SearchReducer from './Reducers/searchReducer';
import EventReducer from './Reducers/eventReducer';


export let initStore = () => {

  const reducer = combineReducers({
     search: SearchReducer,
     event: EventReducer
     
  });

   /* Thunk -action creator */
  const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  return store;
}

export default initStore;