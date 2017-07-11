import { createStore, compose, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';


import SearchReducer from './Reducers/searchReducer';
import UserReducer from './Reducers/userReducer';
import EventReducer from './Reducers/eventReducer';

export let initStore = () => {

  const reducer = combineReducers({
     search: SearchReducer,
     user: UserReducer,
     event: EventReducer

  });

  const store = createStore( reducer,
    compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f      // f = dont do anything
  ) )

  return store;
}

export default initStore;
