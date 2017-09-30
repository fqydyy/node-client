import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routers from './router';
import ConfigureStore from './store/configureStore'


const store = ConfigureStore();

render(
  <Provider  store={store}>
    <Routers />
  </Provider>,
  document.getElementById('app')
)
