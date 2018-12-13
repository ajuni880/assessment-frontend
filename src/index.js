import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { startSetPeople, setSelectedPerson } from './actions/people';
import configureStore from './store/configureStore';

import 'normalize.css';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
// Dispatchs an action for get the people json from the provided url
store.dispatch(startSetPeople());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

/**
 * Listens for hash change in the url and dispatchs an action to set selectedPerson
 * Works 'like static hash router' for displaying the selected person
 */
window.addEventListener('hashchange', (e) => {
    const hash = window.location.hash;
    const id = hash && parseInt(hash.replace('#',''),10);
    if (typeof id !== 'undefined' && id !== null) {
        store.dispatch(setSelectedPerson(id));
    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
