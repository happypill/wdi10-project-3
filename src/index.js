import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import{Provider} from 'react-redux';
import{initStore} from './Store/Store';

//API

const store = initStore();

store.subscribe(()=>{
    const state = store.getState();
})


ReactDOM.render(
                <Provider store={store}>
                <App />
                </Provider>
                , document.getElementById('root'));
registerServiceWorker();
