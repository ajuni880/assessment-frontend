import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import people from '../reducers/people';
import filters from '../reducers/filters';
import pagination from '../reducers/pagination';

export default function() {
    // for debugging purposes 
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // I have decided to compose the state by 3 reducers.
    const rootReducer = combineReducers({
        filters,
        people,
        pagination
    });

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    
    return store;
};
