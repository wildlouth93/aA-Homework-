import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

function addingLoggingToDispatch(store) {
  let localFunc = store.dispatch; 

  return function(action) {
    console.log(store.getState());
    console.log(action); 
    localFunc(action);
    console.log(store.getState());
  };
};

document.addEventListener('DOMContentLoaded', () => {
  let store.dispatch = addingLoggingToDispatch(store);
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
