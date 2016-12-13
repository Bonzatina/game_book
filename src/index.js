import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import configureStore from './store/configureStore'
import { routes } from './routes'
import './containers/main_area.css';

const store = configureStore();

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


// navigator.serviceWorker && navigator.serviceWorker.register('static/MyserviceWorker.js').then(function(registration) {
//     console.log('Excellent, registered with scope: ', registration.scope);
// });

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
