import { createStore, compose, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import SearchReducer from './Components/Search/Reducer/searchReducer';
import UserReducer from './Components/User/Reducer/userReducer';
import EventReducer from './Components/Events/Reducer/eventReducer';

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
